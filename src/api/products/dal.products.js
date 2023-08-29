"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonfile_1 = __importDefault(require("jsonfile"));
const path_1 = __importDefault(require("path"));
const FILE = path_1.default.join(__dirname, '../../../DB/products.json');
const getProducts = async () => {
    const data = await jsonfile_1.default.readFile(FILE);
    return data;
};
const getProduct = async (_id) => {
    const products = await jsonfile_1.default.readFile(FILE);
    const product = products.find((product) => product.id === _id);
    return product;
};
const addProduct = async (newProduct) => {
    const products = await jsonfile_1.default.readFile(FILE);
    const newId = getMaxUserId(products) + 1;
    newProduct.id = newId;
    products.push(newProduct);
    await jsonfile_1.default.writeFile(FILE, products);
    return newProduct;
};
const updateProduct = async (productForUpdate) => {
    const products = await jsonfile_1.default.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === productForUpdate.id);
    if (productIndex === -1) {
        return false;
    }
    products[productIndex] = productForUpdate;
    await jsonfile_1.default.writeFile(FILE, products);
    return productForUpdate;
};
const deleteProduct = async (productId) => {
    const products = await jsonfile_1.default.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === productId);
    if (productIndex === -1) {
        return false;
    }
    const deletedProduct = products[productIndex];
    products.splice(productIndex, 1);
    await jsonfile_1.default.writeFile(FILE, products);
    return deletedProduct;
};
const updateProperty = async (_id, property, propertyValue) => {
    const products = await jsonfile_1.default.readFile(FILE);
    let productIndex = products.findIndex((product) => product.id === _id);
    if (productIndex === -1) {
        return false;
    }
    const currentProduct = products[productIndex];
    currentProduct[property] = propertyValue;
    await jsonfile_1.default.writeFile(FILE, products);
    return products[productIndex];
};
const addQuantity = async (_quantitySize) => {
    const products = await jsonfile_1.default.readFile(FILE);
    products.forEach(product => {
        product.quantity = Math.round(Math.random() * _quantitySize);
    });
    await jsonfile_1.default.writeFile(FILE, products);
};
function getMaxUserId(_elements) {
    let maxId = _elements[0].id;
    for (const element of _elements) {
        if (element.id > maxId) {
            maxId = element.id;
        }
    }
    return maxId;
}
const funcs = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProperty
};
exports.default = funcs;
