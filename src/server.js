"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API Deployed 🚀');
});
app.use((req, res, next) => {
    const err = new Error('page not found');
    next(err);
});
app.listen(PORT, () => {
    console.log(`Server is up and running on port:${PORT}`);
});
