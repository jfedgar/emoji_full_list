import puppeteer from "puppeteer";
import * as fs from "fs";

const getEmoji = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto("https://unicode.org/emoji/charts/full-emoji-list.html", {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  const codes = await page.evaluate(() => {
    const codeTds = document.querySelectorAll("td.code");
    return Array.from(codeTds)
      .map((codeTd) => {
        const codes = codeTd.querySelector("a").innerText;
        return codes.split(" ");
      })
      .flat();
  });

  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const date = `${year}_${month}_${day}`;

  let uniqCodes = codes.filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const data = JSON.stringify(uniqCodes, null, 2);

  fs.writeFile(`emoji_${date}.json`, data, (err) => {
    if (err) throw err;
  });

  await browser.close();
};

getEmoji();
