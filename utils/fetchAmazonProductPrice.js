const puppeteer = require("puppeteer");

async function fetchAmazonProductPrice(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  );

  await page.goto(url);

  try {
    await page.waitForSelector(".a-price .a-offscreen", { timeout: 10000 });
    const priceStr = await page.$eval(".a-price .a-offscreen", (el) =>
      el.textContent.replace("$", "").trim()
    );

    // await page.waitForSelector("#price_inside_buybox", { timeout: 10000 });
    // const priceStr = await page.$eval("#price_inside_buybox", (el) =>
    //   el.textContent.trim()
    // );

    console.log(priceStr, "priceStr");
    // const price = parseFloat(priceStr);

    await browser.close();

    // return price;

    return priceStr;
  } catch (error) {
    console.error("Error fetching product price:", error);
    await browser.close();
    throw new Error("Failed to fetch product price");
  }
}

module.exports = fetchAmazonProductPrice;
