import { validate } from "class-validator";
import express, { Response } from "express";
import Post from "../entities/Post";
import User from "../entities/User";
import authentificationToken, { CustomRequest } from "../middleware/middleware";

const postRoutes = express.Router();

postRoutes.get('/api/post', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const list = await Post.findBy({ user: { id: user.id } })

  return res.status(200).json(list);
})

postRoutes.get('/api/allpost', authentificationToken, async (_: CustomRequest, res: Response) => {
  const list = await Post.find();
  return res.status(200).json(list);
})

postRoutes.post('/api/post', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const { title, img, description } = req.body;

  const post = await Post.create({ title, img, description, user });

  const errors = await validate(post)
  if (errors.length > 0) return res.status(400).json({ errors })

  post.save();

  return res.status(200).end();
})

postRoutes.put('/api/post/:id', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const id = Number.parseInt(req.params.id);

  if (isNaN(id))
    return res.status(200).json({ message: `${id} is not number ` });

  const { title, img, description } = req.body;
  const postUpdate = await Post.create({ id, title, img, description, user });
  const errors = await validate(postUpdate)

  if (errors.length > 0) return res.status(400).json({ errors })

  const post = await Post.findOneBy({ id, user: { id: user.id } });

  if (!post)
    return res.status(404).end();

  await Post.update(id, { title, img, description });

  return res.status(200).end();

})

postRoutes.delete('/api/post/:id', authentificationToken, async (req: CustomRequest, res: Response) => {
  const user = req.user as User;
  const id = Number.parseInt(req.params.id);
  if (isNaN(id))
    return res.status(200).json({ message: `${id} is not number ` });

  const post = await Post.findOneBy({ ...req.params, user: { id: user.id } });

  await post?.remove();

  return res.status(200).end();
})

export {
  postRoutes
}