import Subscription from '../models/Subscription';
import Event from '../models/Event';
import { Op } from 'sequelize';
import User from '../models/User';
import Mail from '../../lib/Mail';
import File from '../models/File';

class SubscriptionController {
  async store(req, res) {
    const { user_id, event_id } = req.body;

    const hasAlreadySubscribed = await Subscription.findOne({
      where: {
        user_id,
        event_id,
        canceled_at: null,
      },
    });

    if (hasAlreadySubscribed) {
      return res
        .status(400)
        .json({ error: 'O Usuário já está inscrito neste evento' });
    }

    const { date, title, provider } = await Event.findOne({
      where: {
        id: event_id,
      },
      include: [
        {
          model: User,
          as: 'provider',
          attributes: ['email', 'name'],
        },
      ],
    });

    const subscriptions = (await Subscription.findAll({
      where: {
        user_id,
        canceled_at: null,
      },
      attributes: ['event_id'],
    })).map(s => s.event_id);

    const sameDateMeeting = await Event.findAll({
      where: {
        date: {
          [Op.eq]: date,
        },
        id: {
          [Op.in]: subscriptions,
        },
      },
    });

    if (sameDateMeeting.length > 0) {
      return res.status(400).json({
        error: 'O Usuário já está inscrito em um evento neste horário',
      });
    }
    const subscription = await Subscription.create(
      {
        user_id,
        event_id,
      },
      {
        raw: true,
      }
    );

    const user = await User.findByPk(user_id);

    await Mail.sendMail({
      to: provider.email,
      subject: 'Nova inscrição no evento ' + title,
      template: 'subscription',
      context: {
        provider: provider.name,
        user: user.name,
        title,
      },
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscriptionCanceled = await Subscription.findByPk(req.params.id);

    if (!subscriptionCanceled) {
      return res.status(401).json({ error: 'Inscrição não encontrada' });
    }
    subscriptionCanceled.canceled_at = new Date();
    await subscriptionCanceled.save();

    return res.json(subscriptionCanceled);
  }

  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
        canceled_at: null,
      },
      attributes: ['id'],
      include: [
        {
          model: Event,
          as: 'event',
          required: false,
          where: {
            date: {
              [Op.gte]: new Date(),
            },
            canceled_at: null,
          },
          include: [
            {
              model: File,
              as: 'banner',
              attributes: ['url', 'name', 'path'],
            },
            {
              model: User,
              attributes: ['name', 'email'],
              as: 'provider',
            },
          ],
        },
      ],
    });

    return res.json(subscriptions);
  }
}

export default new SubscriptionController();
