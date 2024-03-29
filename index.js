import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { readXLSXData } from "./helper/xlsx_helper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenvConfig();

connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.json("Hello, this is the root route!");
});
app.get("/read-xlsx", async (req, res) => {
  let readXlsxRes = await readXLSXData(__dirname + "/assets/xlsx/sample3.xlsx");
  if (readXlsxRes) {
    res.json(readXlsxRes);
  } else {
    res.json("No file data available");
  }
});
app.get("/read-csv", async (req, res) => {
  let readXlsxRes = await readXLSXData(__dirname + "/assets/csv/machine.csv");
  if (readXlsxRes) {
    res.json(readXlsxRes);
  } else {
    res.json("No file data available");
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
