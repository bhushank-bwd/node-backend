import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import { readFileContent } from "./helper/file_helper.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createPDF } from "./helper/pdf_helper.js";
import fs from "fs"; // Using fs.promises for async/await

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenvConfig();

connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
  let html = await readFileContent(
    __dirname + "/assets/html/email_templates/welcome.html"
  );
  html = html
    .replace("{{name}}", "John Doe")
    .replace("{{additionalInfo}}", "Here are some extra details");
  var dir = __dirname + "/uploads/pdf";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const pdfRes = await createPDF(html, "uploads/pdf");
  if (pdfRes) {
    res.json("PDF created successfully!");
  } else {
    res.json("Problem in creating PDF!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
