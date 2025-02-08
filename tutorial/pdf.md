# Puppeteer PDF

## Package

```bash
npm i puppeteer
```

## PDF generation

- Import

```js
import { launch } from "puppeteer";
```

- Code

```js
const path = "your-directory"; // need to create else give error
const htmlText = "<Your-HTML-Text>";
const browser = await launch();
const page = await browser.newPage();
await page.setContent(htmlText);
let pdfName = `${path}/PDF-Name.pdf`;
await page.pdf({ path: name, format: "A4" }); // Save as PDF
await browser.close();
```
