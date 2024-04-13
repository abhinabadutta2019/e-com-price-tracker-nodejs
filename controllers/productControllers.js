const fetchAmazonProductPrice = require("../utils/fetchAmazonProductPrice");
const fetchAmazonProductDetails = require("../utils/fetchAmazonProductDetails");

// Controller to fetch and display the price of an Amazon product
exports.getProductPrice = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).send("Product URL is required");
    }

    const price = await fetchAmazonProductPrice(url);
    res.send(`Price of the product: $${price}`);
  } catch (error) {
    console.error("Error fetching product price:", error);
    res.status(500).send("Error fetching product price");
  }
};

// Controller to fetch product details (name, image URL, price)
exports.getProductDetails = async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).send("Product URL is required");
    }

    const productDetails = await fetchAmazonProductDetails(url);
    res.json(productDetails);
  } catch (error) {
    console.error("Error fetching product details:", error);
    res.status(500).send("Error fetching product details");
  }
};
