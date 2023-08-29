"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_products_1 = __importDefault(require("./service.products"));
const getProducts = async (req, res) => {
    try {
        const products = await service_products_1.default.getProducts();
        res.json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
        res.status(500).json({ error: "server error" });
    }
};
const getProduct = async (req, res) => {
    try {
        const currentId = Number(req.params.id);
        const product = await service_products_1.default.getProduct(currentId);
        if (!product) {
            res.status(400).json({ message: 'product does not exist' });
        }
        else {
            res.status(200).json(product);
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
};
const addProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const createdProduct = await service_products_1.default.addProduct(newProduct);
        res.status(200).json({ success: "added Sucssesfuli" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
};
const updateProduct = async (req, res) => {
    try {
        const ProductId = Number(req.params.id);
        const ProductForUpdate = req.body;
        ProductForUpdate.id = ProductId;
        const updatedProduct = await service_products_1.default.updateProduct(ProductForUpdate);
        if (updatedProduct === false) {
            res.json({ error: 'Product has not exist' });
            return;
        }
        res.status(200).json({ success: "updated Sucssesfuli" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const ProductId = Number(req.params.id);
        const deletedProduct = await service_products_1.default.deleteProduct(ProductId);
        if (deletedProduct === false) {
            res.send('Product does not exist');
            return;
        }
        res.status(200).json({ success: "deleted Sucssesfuli" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
};
const updateProperty = async (req, res) => {
    try {
        const productId = Number(req.params.id);
        const propertyForUpdate = req.body;
        const property = Object.keys(propertyForUpdate)[0];
        const propertyValue = propertyForUpdate[property];
        const updatedProduct = await service_products_1.default.updateProperty(productId, property, propertyValue);
        if (updatedProduct === false) {
            res.send('Product has not exist');
            return;
        }
        res.status(200).json({ success: "property updated ucssesfuli" });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "server error" });
    }
};
const funcs = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProperty
};
exports.default = funcs;
