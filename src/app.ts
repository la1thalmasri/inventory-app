import express from "express";
import products from "./products";

const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// GET /products/:id
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
    return;
  }

  res.json(product);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});