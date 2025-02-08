import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import todoRouter from "./routes/react-practice/todo.js";
import { createExcel, readExcel } from "./helper/exceljs_helper.js";
import { createPDF } from "./helper/pdf_helper.js";
import { invoiceText } from "./extra/constants.js";
import { getMetaTags } from "./helper/meta_helper.js";
dotenvConfig();

// connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
  let metaTags = await getMetaTags("https://vivopune.com/product/12081723");
  res.status(200).json({ status: metaTags });
});
// connectToMongoDB();
app.use("/api/v1/todo", todoRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
