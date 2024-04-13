const express = require("express");
const puppeteer = require("puppeteer");

const app = express();
const PORT = 3011;

const dotenv = require("dotenv");
const productRouter = require("./routes/productRoutes");

const fetchAmazonProductPrice = require("./utils/fetchAmazonProductPrice");
const fetchAmazonProductDetails = require("./utils/fetchAmazonProductDetails");

//
app.use("/product", productRouter);
//

// async function testPuppeteer() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setUserAgent(
//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
//   );

//   await page.goto("https://www.amazon.com", {
//     waitUntil: "domcontentloaded",
//     timeout: 0,
//   });

//   // await page.goto("https://www.amazon.com"); // Open example.com

//   await page.screenshot({ path: "example.png" }); // Take a screenshot

//   await browser.close();

//   console.log("Puppeteer is working correctly!");
// }

// testPuppeteer().catch((error) => {
//   console.error("Error testing Puppeteer:", error);
// });

// // Route to fetch and display the price of an Amazon product
// app.get("/price", async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).send("Product URL is required");
//   }

//   try {
//     const price = await fetchAmazonProductPrice(url);
//     res.send(`Price of the product: $${price}`);
//   } catch (error) {
//     console.error("Error fetching product price:", error);
//     res.status(500).send("Error fetching product price");
//   }
// });

// //
// app.get("/details", async (req, res) => {
//   const { url } = req.query;

//   if (!url) {
//     return res.status(400).send("Product URL is required");
//   }

//   try {
//     const productDetails = await fetchAmazonProductDetails(url);
//     res.json(productDetails);
//   } catch (error) {
//     console.error("Error fetching product details:", error);
//     res.status(500).send("Error fetching product details");
//   }
// });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
