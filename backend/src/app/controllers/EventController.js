import * as Yup from 'yup';
import {
  startOfDay,
  endOfDay,
  startOfHour,
  parseISO,
  isBefore,
  subHours,
} from 'date-fns';
import Event from '../models/Event';
import User from '../models/User';
import File from '../models/File';
import Queue from '../../lib/Queue';
import CancellationMail from '../jobs/CancellationMail';
import { Op } from 'sequelize';

class EventController {
  async index(req, res) {
    const { page = 1, date } = req.query;
    const { user_id } = req.body;

    const query = {
      order: ['date'],
      attributes: ['id', 'date', 'past', 'location', 'banner_id', 'title', 'description'],
      where: {
        canceled_at: null,
      },
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['url', 'id', 'path'],
            },
          ],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['url', 'id', 'path'],
        },
      ],
    };

    if (date) {
      query.where = {
        ...query.where,
        date: {
          [Op.between]: [startOfDay(new Date(date)), endOfDay(new Date(date))],
        },
      };
    }
    if (user_id) {
      query.where = {
        ...query.where,
        user_id: user_id,
      };
    }
    if (req.query.isProvider) {
      query.where = {
        ...query.where,
        provider_id: req.userId,
      };
    }

    const events = await Event.findAll(query);

    return res.json(events);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      provider_id: Yup.number().required(),
      date: Yup.date().required(),
      title: Yup.string().required(),
      location: Yup.string().required(),
      description: Yup.string().required(),
      banner_id: Yup.number().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Failed' });
    }

    const {
      provider_id,
      date,
      title,
      location,
      description,
      banner_id,
    } = req.body;

    const isProvider = await User.findOne({
      where: { id: provider_id, provider: true },
    });

    if (!isProvider) {
      return res
        .status(400)
        .json({ error: 'You can only create events with providers' });
    }

    const hourStart = startOfHour(parseISO(date));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const event = await Event.create({
      user_id: req.userId,
      provider_id,
      date,
      title,
      location,
      description,
      banner_id,
    });

    return res.json(event);
  }

  async delete(req, res) {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['name', 'email'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['name'],
        },
      ],
    });
    if (event.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'You can only cancel your own events' });
    }

    event.canceled_at = new Date();
    await event.save();

    await Queue.add(CancellationMail.key, {
      event,
    });

    return res.json(event);
  }

  async update(req, res) {
    const event = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.json(event);
  }
}

export default new EventController();
