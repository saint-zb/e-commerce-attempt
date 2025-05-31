//  Import Express and initialize the app
const express = require('express');
const app = express();

// Middleware to handle JSON
app.use(express.json());

//  Create in-memory data to simulate a simple e-commerce product catalog
let products = [
  {
    id: 1,
    name: 'Wireless Mouse',
    description: 'Ergonomic wreless mouse with USB receiver',
    price: 2500,i
    quantity: 100
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    description: 'Backlit mechanical keyboard with blue switches',
    price: 7000,
    quantity: 50
  }
];

//  CREATE - Add a new product
app.post('/products', (req, res) => {
  const { name, description, price, quantity } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    quantity
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// READ - Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// READ - Get a specific product by ID
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// UPDATE - Update product details
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  const { name, description, price, quantity } = req.body;
  if (name !== undefined) product.name = name;
  if (description !== undefined) product.description = description;
  if (price !== undefined) product.price = price;
  if (quantity !== undefined) product.quantity = quantity;

  res.json(product);
});

// DELETE - Remove a product
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index === -1) return res.status(404).send('Product not found');

  products.splice(index, 1);
  res.send('Product deleted');
});

//  Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`E-commerce API running at http://localhost:${PORT}`);
});