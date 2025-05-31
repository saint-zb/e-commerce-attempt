 E-Commerce Product API

This is a simple Express-based CRUD API for managing products in an e-commerce store. It supports basic operations like adding, viewing, editing, and deleting products. This is great for learning how RESTful APIs work and how to build them with Node.js and Express.

# Features

Add new products

View all available products

View a single product by ID

Edit/update existing product details

Delete a product by ID

# Technologies Used

Node.js

Express.js

# Project Setup

Clone the repo:

git clone https://github.com/saint-zb/ecommerce-attempt.git

Navigate into the folder:

cd ecommerce-attempt

Install the dependencies:

npm install

Start the server:

node app.js

(or use nodemon app.js if you have nodemon installed)

The API will run on: http://localhost:3000

# API Endpoints

Method  Endpoint   Description

POST    /products   Add a new product

GET     /products   View all products

GET     /products/:id   View a specific product

PUT     /products/:id   Update a product

DELETE  /products/:id   Delete a product


 Notes

This API stores products in memory, so data resets every time the server restarts.

Useful as a base template for more complex e-commerce applications.

