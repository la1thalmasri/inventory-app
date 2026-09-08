//Task 7
import {
   products,
} from "./products.js";


function calculateStatus(product) {

   if (new Date(product.expiryDate) < new Date()) {
      return "EXPIRED";
   };

   if (product.quantity === 0) {
      return "OUT_OF_STOCK";
   }

   if (product.quantity <= product.minimumStock) {
      return " LOW_STOCK";
   }
};


function GitHighStockProducts(product) {
   const HighStockProducts = products.filter(product => product.quantity > 10);
   return HighStockProducts;
};


function GetLowStockProducts(product) {
   const LowStockProducts = products.filter(product => product.quantity <= product.minimumStock);
   return LowStockProducts;
};

/* function + if =
function GetLowStockProducts() {
   const LowStockProducts = products.filter(product => product.quantity <= product.minimumStock);
   if (LowStockProducts.length === 0) {
      return "NO PRODUCT"
   };
   return LowStockProducts;
};
*/

function GtAllProducts() {
   const product = products.map(product => product.name);
   return product;
};

export {
   calculateStatus,
   GitHighStockProducts,
   GetLowStockProducts,
   GtAllProducts,
};
