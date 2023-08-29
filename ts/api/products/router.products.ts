import express, { Router } from "express";
import productsController from './controller.products';
//import middleWare from './middleWare';

const router: Router = express.Router()

router.get('/', productsController.getProducts);

router.get('/:id',  productsController.getProduct)

router.post('/',  productsController.addProduct)

router.put('/:id',  productsController.updateProduct)

router.delete('/:id', productsController.deleteProduct)

router.patch('/:id',  productsController.updateProperty)

// router.get('/:id', middleWare.idValidate, productsController.getProduct)

// router.post('/', middleWare.productValidate, productsController.addProduct)

// router.put('/:id', middleWare.idValidate, middleWare.productValidate, productsController.updateProduct)

// router.delete('/:id', middleWare.idValidate, productsController.deleteProduct)

// router.patch('/:id', middleWare.idValidate, middleWare.patchProductValidate, productsController.updateProperty)

export default router