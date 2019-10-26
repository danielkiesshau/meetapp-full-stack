import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    const { id } = req.params;
    const { url } = await File.findByPk(Number(id));
    return res.json(url);
  }
}

export default new FileController();
