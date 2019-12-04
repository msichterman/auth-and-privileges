const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Product Model
const Product = require("../../models/Product");

// @route   GET api/products
// @desc    Get All Products
// @access  Public
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: 1 })
    .then(products => res.json(products));
});

// @route   POST api/products
// @desc    Create A Product
// @access  Private
router.post("/", auth, (req, res) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity
  });

  newProduct.save().then(product => res.json(product));
});

// @route   PUT api/products
// @desc    Update A Product (as an Admin?)
// @access  Private
router.put("/", auth, (req, res) => {
  Product.findOneAndUpdate(
    { name: req.body.name },
    {
      $set: {
        price: req.body.price,
        quantity: req.body.quantity
      }
    },
    // new option returns updated object
    { new: true, useFindAndModify: false }
  ).then(product => res.json(product));
});

module.exports = router;
