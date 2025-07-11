const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Place an order (COD)
router.post("/", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all orders (admin view)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("userId");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
