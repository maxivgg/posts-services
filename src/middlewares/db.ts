import { connectToDatabase } from "../db/conn";

async function databaseMiddleware(req: any, res: any, next: any) {
  try {
    const db = await connectToDatabase();
    req.db = db;
    next();
  } catch (error) {
    console.error("Error connect DB:", error);
    next(error);
  }
}

export { databaseMiddleware };
