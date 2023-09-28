const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

const connectionString = process.env.DB_URL;
const dbName = "sample_training";

async function connectToDatabase() {
  const client = new MongoClient(connectionString);
  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.error("Error in database connection:", error);
    throw error;
  }
}

export { connectToDatabase };
