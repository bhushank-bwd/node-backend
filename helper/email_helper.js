import { config as dotenvConfig } from "dotenv";
import nodemailer from "nodemailer";
dotenvConfig();

export const sendHtmlMail = async (html) => {
  const mailOptions = {
    from: '"silogateway" <silogateway@gmail.com>',
    to: "bhushank.bwd@gmail.com",
    subject: "Sending an HTML Email with Nodemailer Template",
    html: html
      .replace("{{name}}", "John Doe")
      .replace("{{additionalInfo}}", "Here are some extra details"),
  };
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONTACT_MAIL,
      pass: process.env.CONTACT_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
