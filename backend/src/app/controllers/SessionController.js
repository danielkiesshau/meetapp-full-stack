import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';
import File from '../models/File';

class SessionController {
  async store(req, res) {
    const { email, password, isOrganizer, } = req.body;
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
      isOrganizer: Yup.bool(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro na validação de dados enviados' });
    }

    const user = await User.findOne({
      where: {
        email,
        ...(isOrganizer ? { provider: true } : {})
      },
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'url', 'path']
        }
      ]
    });

    if (isOrganizer && !user) {
      return res.status(401).json({ error: 'Somente organizadores de eventos podem entrar no site'})
    }

    if (!user) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    const { id, name, avatar } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
