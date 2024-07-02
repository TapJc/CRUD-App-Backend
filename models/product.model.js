/**
 * Model allows us to store data into our database. There has to be a model of some
 * kind that our nodejs application could use, so that it can send it to the database
 * and store it there.
 */

const { type } = require("express/lib/response");
// Allows access to MongoDB
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
