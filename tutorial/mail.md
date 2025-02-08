# Nodemailer Email

## Package installation

```bash
npm i nodemailer
```

## Code

- Import

```js
import nodemailer from "nodemailer";
```

- Send Mail

```js
const mailOptions = {
  from: '"sender_name" <sender@mail.com>',
  to: receiverMailAddress,
  subject: subject,
  html: htmlText
    .replace("{{replaceKey1}}", replaceValue1)
    .replace("{{replaceKey2}}", replaceValue2),
};
const transporter = nodemailer.createTransport({
  host: SMTP_Value,
  port: PORT_NO,
  secure: true,
  auth: {
    user: process.env.CONTACT_MAIL_ADDRESS,
    pass: process.env.CONTACT_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});
try {
  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent: " + info.response);
} catch (error) {
  console.error(error);
}
```
