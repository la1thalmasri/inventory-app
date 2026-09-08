//Task 7

import {

    calculateStatus,
    GitHighStockProducts,
    GetLowStockProducts,
    GtAllProducts,
} from "./inventory.js";
import { products } from "./products.js";


console.log(calculateStatus(products[2]));
console.log(GitHighStockProducts());
console.log(GetLowStockProducts());
console.log(GtAllProducts());
