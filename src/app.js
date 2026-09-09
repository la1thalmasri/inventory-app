//Task 8

import {
    createOrder,

} from "./inventory.js";
import { products } from "./products.js";

console.log(createOrder("laith", "pizza", 2));
console.log(createOrder("laith", "rice", 2));
console.log(createOrder("laith", "milk", 29));
console.log(createOrder("amiad", "milk", 2));
console.log(createOrder("AYA", "Chocolate", 20));
console.log(createOrder("laith", "milk", 2));
console.log(createOrder("laith", "braed", 2));
console.log(products.find(C => C.name === "Chocolate").quantity);





























