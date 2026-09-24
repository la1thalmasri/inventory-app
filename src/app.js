//Task 8
import express from "express";

import {
    createOrder,

} from "./inventory.js";
import { products } from "./products.js";

console.log(createOrder("laith", "pizza", 2));
console.log(createOrder("laith", "rice", 2));
console.log(createOrder("laith", "milk", 29));
console.log(createOrder("amiad", "milk", 2));
console.log(createOrder("AHMAD", "Chocolate", 20));
console.log(createOrder("laith", "milk", 2));
console.log(createOrder("laith", "braed", 2));
console.log(products.find(C => C.name === "Chocolate").quantity);

const app = express();

app.get("/products", (req, res) => {
    res.json(products);
});

app.listen (3000 , ()=> {
    console.log("Server is runnig");
});
