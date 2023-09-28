import postModel from "../models/post.model";

export const getPosts = async (req: any, res: any) => {
  const { limit = 10, page = 1 } = req.query;
  const posts = await postModel.get({ db: req.db, limit, page });
  res.send(posts);
};
