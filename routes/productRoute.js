const express = require("express");
const router = express.Router();

const Product = require("../models/productModel");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Get all products
router.get("/", getProducts);

// Get product with ID
router.get("/:id", getProduct);

//Insert product
router.post("/", createProduct);

//Update Product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

module.exports = router;
