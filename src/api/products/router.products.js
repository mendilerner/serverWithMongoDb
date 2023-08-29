"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_products_1 = __importDefault(require("./controller.products"));
const router = express_1.default.Router();
router.get('/', controller_products_1.default.getProducts);
router.get('/:id', controller_products_1.default.getProduct);
router.post('/', controller_products_1.default.addProduct);
router.put('/:id', controller_products_1.default.updateProduct);
router.delete('/:id', controller_products_1.default.deleteProduct);
router.patch('/:id', controller_products_1.default.updateProperty);
exports.default = router;
