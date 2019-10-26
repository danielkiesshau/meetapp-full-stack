import * as Yup from 'yup';
import User from '../models/User';
import File from '../models/File';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Informe todos os campos necessários' });
    }

    const userExists = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (userExists) {
      return res.status(400).json({ error: 'Usuário já existente' });
    }

    const { email, id, name, provider } = await User.create(req.body);
    const token =  jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });
    return res.json({
      user: {
        id,
        name,
        email,
      },
      provider,
      token
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6),
      confirmPassword: Yup.string().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Faltaram campos para a atualização' });
    }

    const { email, oldPassword, password, confirmPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (user.email !== email) {
      const userExists = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userExists) {
        return res.status(400).json({ error: 'Email em uso' });
      }
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: 'A nova senha está diferente da senha de confirmação' });
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      email,
      id,
      name,
      provider
    });
  }
}

export default new UserController();
