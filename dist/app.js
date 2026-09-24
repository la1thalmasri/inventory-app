"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("./products"));
const app = (0, express_1.default)();
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});
// GET /products
app.get("/products", (req, res) => {
    res.json(products_1.default);
});
// GET /products/:id
app.get("/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const product = products_1.default.find((product) => product.id === id);
    if (!product) {
        res.status(404).json({ message: "Product not found" });
        return;
    }
    res.json(product);
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=app.js.map