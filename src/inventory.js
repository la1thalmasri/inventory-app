//Task 8

import { products } from "./products.js";


function createOrder(customer, productName, quantity) {


   const product = products.find(x => x.name === productName);

   if (!product) {
      return "product not found";
   }
   if (!product.active) {
      return "product not active";
   }

   const today = new Date(); // ال (new Date) هان يعني تاريخ اليوم
   const expiryDate = new Date(product.expiryDate); // ال(new date)  هان عشان تحول النص من (string => Data) عشان تعرف تقارن مع اليوم
   if (today > expiryDate) {
      return "product ExpiryDate";
   }
   if (quantity > product.quantity) {
      return "not enough stoock";
   }

   const total = product.price * quantity;
   product.quantity -= quantity;
   const order = {
      orderId: Date.now(),
      customer: customer,
      product: productName,
      quantity: quantity,
      price: product.price,
      total: total
   };
   return order;
};


export { createOrder };
