import { ObjectId } from "mongodb";

export interface Post {
  _id: string;
  body: string;
  permalink: string;
  autor: string;
  tags: string[];
  coments: string[];
  date: string;
}

export const get = async ({ db, limit, page }: any) => {
  let collection = await db.collection("posts");
  return collection
    .find({})
    .limit(Number(limit))
    .skip((page - 1) * limit)
    .toArray();
};

export default {
  get,
};
