import mongoose from "mongoose";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();
const mongoURI = `${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}`;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
