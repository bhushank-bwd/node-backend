import * as Cheerio from "cheerio";

export const getMetaTags = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const html = await response.text();
  const $ = Cheerio.load(html);

  const metaTags = {};

  $("meta").each((index, element) => {
    const name = $(element).attr("name") || $(element).attr("property");
    const content = $(element).attr("content");

    if (name && content) {
      metaTags[name] = content;
    }
  });
  console.log("metaTags", metaTags);
  return metaTags;
};
