import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes";
import { databaseMiddleware } from "./middlewares/db";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(databaseMiddleware);

app.use("/api/post", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
