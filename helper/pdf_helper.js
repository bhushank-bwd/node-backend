import { launch } from "puppeteer";

export const createPDF = async (html, path = "uploads") => {
  try {
    const browser = await launch();
    const page = await browser.newPage();
    await page.setContent(html);
    let dt = new Date();
    let name =
      path +
      "/" +
      dt.getFullYear() +
      "-" +
      dt.getMonth() +
      "-" +
      dt.getDate() +
      "-" +
      dt.getHours() +
      dt.getMinutes() +
      dt.getSeconds() +
      "-welcome.pdf";
    await page.pdf({ path: name, format: "A4" }); // Save as PDF

    await browser.close();
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
