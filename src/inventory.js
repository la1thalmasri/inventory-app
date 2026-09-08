//Task 6
import {products } from "./products.js";

function addProduct(){
products.push({ id: 5, name: "Chocolate2", price: 3.5, quantity: 5, expiryDate: "2026-10-01", minimumStock: 10, },);
return products;
};

function listProducts(){
return products;
};

function findProduct (id){
return products.find(x => x.id === id);
};

function updateProduct(id, update){
const product= products.find(product => product.id === id);
 if(! product){
    return null;
 }
 Object.assign(product, update);
 return product;
};

function DeleteProduct(name){
   const index = products.findIndex(product => product.name === name);

products.splice(index, 1);
return products;
};

export {addProduct , listProducts , findProduct , updateProduct , DeleteProduct };


