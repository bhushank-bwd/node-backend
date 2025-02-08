# Read meta tags

## Package Installation

```bash
npm i cheerio
```

## Code

- Import

```js
import * as Cheerio from "cheerio";
```

- Get meta tags

```js
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
```
