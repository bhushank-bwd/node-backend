import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import todoRouter from "./routes/react-practice/todo.js";
import { createExcel, readExcel } from "./helper/exceljs_helper.js";
dotenvConfig();

// connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
  let items = [200, 201, 204, 404, 500, 301, 400, 401, 403, 429];
  var item = items[Math.floor(Math.random() * items.length)];
  // createExcel();
  let data = await readExcel();
  res
    // .setHeader("content-type", "text/plain")
    .status(200)
    .json(data);
});
app.use("/api/v1/todo", todoRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
