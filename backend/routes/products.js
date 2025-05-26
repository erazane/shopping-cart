const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const transformedProducts = products.map(product => ({
      ...product._doc,
      image: `/images/${product.imageUrl}` // Add prefix here
    }));
    res.json(transformedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    
    const transformedProduct = {
      ...product._doc,
      image: `/images/${product.imageUrl}` // Add prefix here
    };
    
    res.json(transformedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;