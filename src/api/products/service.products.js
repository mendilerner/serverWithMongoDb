"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dal_products_1 = __importDefault(require("./dal.products"));
const getProducts = async () => {
    const users = await dal_products_1.default.getProducts();
    return users;
};
const getProduct = async (_id) => {
    const product = await dal_products_1.default.getProduct(_id);
    return product;
};
const addProduct = async (newProduct) => {
    const createdProduct = await dal_products_1.default.addProduct(newProduct);
    return createdProduct;
};
const updateProduct = async (productForUpdate) => {
    const updatedProduct = await dal_products_1.default.updateProduct(productForUpdate);
    return updatedProduct;
};
const deleteProduct = async (ProductId) => {
    const deletedProduct = await dal_products_1.default.deleteProduct(ProductId);
    return deletedProduct;
};
const updateProperty = async (id, property, propertyValue) => {
    const updatedProduct = await dal_products_1.default.updateProperty(id, property, propertyValue);
    return updatedProduct;
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
