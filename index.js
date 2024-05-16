import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import todoRouter from "./routes/react-practice/todo.js";
dotenvConfig();

connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", async (req, res) => {
  res.json("Hello, this is the root route!");
});
app.use("/api/v1/todo", todoRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
