const express = require("express");
const {
  getProductPrice,
  getProductDetails,
} = require("../controllers/productControllers");

const router = express.Router();

// Route to fetch and display the price of an Amazon product
router.get("/price", getProductPrice);

// Route to fetch product details (name, image URL, price)
router.get("/details", getProductDetails);

module.exports = router;
