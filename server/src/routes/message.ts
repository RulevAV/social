import { validate } from "class-validator";
import express, { Response } from "express";
import Message from "../entities/Message";
import User from "../entities/User";
import authentificationToken, { CustomRequest } from "../middleware/middleware";

const portion = 2;

const messageRoutes = express.Router();

messageRoutes.get('/api/message', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;

  let addressee = Number.parseInt(req.query.addressee as string);
  let page = Number.parseInt(req.query.page as string);

  if (isNaN(addressee) || isNaN(page))
    return res.status(200).json({ message: `${addressee} or ${page} is not number ` });

  const count = await Message.count({
    where: [{ addressee, user: { id: user.id } },
    { addressee: user.id, user: { id: addressee } }]
  });

  const residue = count % portion;
  const sizePage = Math.floor(count / portion) + (residue ? 0 : 1);

  const list = await Message.find({
    order: {
      createdAt: "ASC",
    },
    skip: page * portion,
    take: portion,
    where: [{ addressee, user: { id: user.id } },
    { addressee: user.id, user: { id: addressee } }],
  });

  return res.status(200).json({ list, sizePage, page });
})


messageRoutes.post('/api/message', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const { addressee, message } = req.body;

  const _message = await Message.create({ addressee, message, user });

  const errors = await validate(_message)
  if (errors.length > 0) return res.status(400).json({ errors })

  _message.save();

  return res.status(200).end();
})

messageRoutes.put('/api/message/:id', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const id = Number.parseInt(req.params.id);

  if (isNaN(id))
    return res.status(200).json({ message: `${id} is not number ` });

  const { message } = req.body;

  const messageUpdate = await Message.create({ id, message, user });

  const errors = await validate(messageUpdate)

  if (errors.length > 0) return res.status(400).json({ errors })

  const _message = await Message.findOneBy({ id, user: { id: user.id } });

  if (!_message)
    return res.status(404).json({ message: "не найдено" });

  await Message.update(id, { message });

  return res.status(200).end();
})

messageRoutes.delete('/api/message/:id', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const id = Number.parseInt(req.params.id);
  if (isNaN(id))
    return res.status(200).json({ message: `${id} is not number ` });

  const _message = await Message.findOneBy({ id, user: { id: user.id } });
  if (!_message)
    return res.status(404).json({ message: "не найдено" });

  await _message.remove();

  return res.status(200).end();
})

export {
  messageRoutes
}