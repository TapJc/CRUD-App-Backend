const express = require("express");
// Allows access to MongoDB
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Nodejs doesn't allow JSON by default
app.use(express.json());

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.64fccs2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to the database!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
