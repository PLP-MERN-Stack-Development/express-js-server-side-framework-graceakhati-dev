const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let products = [
  { id: uuidv4(), name: 'Crochet Hook', description: 'Size 5mm', price: 3.0, category: 'tools', inStock: true },
  { id: uuidv4(), name: 'Yarn Bundle', description: 'Soft cotton yarn', price: 5.0, category: 'materials', inStock: true },
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET a single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST a new product
router.post('/', (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// DELETE a product
router.delete('/:id', (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.status(204).end();
});

module.exports = router;
