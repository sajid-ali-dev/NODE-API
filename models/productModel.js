const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Please enter a product name"],
    },
    quantity: {
      type: "number",
      required: true,
      default: 0,
    },
    price: {
      type: "number",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
