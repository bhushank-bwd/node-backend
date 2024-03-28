import express, { json } from "express";
import cors from "cors";
import { config as dotenvConfig } from "dotenv";
import connectToMongoDB from "./database/db_connection.js";
import { readFileContent } from "./helper/file_helper.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { sendHtmlMail } from "./helper/email_helper.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenvConfig();

connectToMongoDB();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
  const html = await readFileContent(
    __dirname + "/assets/html/email_templates/welcome.html"
  );
  const emailRes = await sendHtmlMail(html);
  if (emailRes) {
    res.json("Mail sent successfully!");
  } else {
    res.json("Problem in mail sending!");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
