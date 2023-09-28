import { Router } from "express";
const router = Router();

import * as postService from "../services/post.service";

router.get("/", postService.getPosts);

export default router;
