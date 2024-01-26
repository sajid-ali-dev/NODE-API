const express = require('express')
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const app = express();

const port = "4000";

app.use(express.json());
// for using form data
app.use(express.urlencoded({ extended: false }));

//routes

// Get all products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product with ID
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update Product
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete product
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find any product with ID ${id}` });
    }
    res.status(200).json({ message: "Product has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Insert product
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://admin:admin304@sajidcluster.3gywfn3.mongodb.net/node-api?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Node API is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });