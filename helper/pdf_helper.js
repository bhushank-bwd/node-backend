import { launch } from "puppeteer";
import puppeteer from "puppeteer";

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
export const websiteSnapshot = async (path, url, div = null) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the website
    await page.goto(url); // Replace with the actual website URL

    // Wait for the page to load (optional)
    await page.waitForSelector("body"); // Waits for the body element to be loaded
    url = url.replace("https://", "");
    url = url.replace("http://", "");

    // Take a full-page screenshot
    await page.screenshot({ path: path + "/" + url + ".jpg", fullPage: true });

    // Alternatively, take a screenshot of a specific element
    if (div) {
      const element = await page.waitForSelector("#" + div);
      await element.screenshot({ path: path + "/" + url + "#" + div + ".jpg" });
    }
    await browser.close();
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
