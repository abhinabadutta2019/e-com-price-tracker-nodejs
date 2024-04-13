const puppeteer = require("puppeteer");

async function fetchAmazonProductDetails(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
  );

  await page.goto(url);

  try {
    await page.waitForSelector("#productTitle", { timeout: 10000 });
    await page.waitForSelector("#landingImage", { timeout: 10000 });

    const productName = await page.$eval("#productTitle", (el) =>
      el.textContent.trim()
    );
    const imageURL = await page.$eval("#landingImage", (el) => el.src);

    // const priceStr = await page.$eval(".a-price .a-offscreen", (el) =>
    //   el.textContent.trim()
    // );

    const priceStr = await page.$eval(".a-price .a-offscreen", (el) =>
      el.textContent.replace("$", "").trim()
    );
    const price = parseFloat(priceStr);

    await browser.close();

    return {
      productName,
      imageURL,
      price,
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    await browser.close();
    throw new Error("Failed to fetch product details");
  }
}

module.exports = fetchAmazonProductDetails;
