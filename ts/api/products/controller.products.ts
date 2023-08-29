import { tProduct } from './interfaces.products';
import productsService from './service.products'
import { Request, Response } from 'express';



const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products: tProduct[] = await productsService.getProducts();
        res.json(products);
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
        }
        res.status(500).json({ error: "server error" })
    }
};


const getProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const currentId: number = Number(req.params.id)
        const product: tProduct | undefined = await productsService.getProduct(currentId);
        if (!product) {
            res.status(400).json({ message: 'product does not exist' })
        }
        else {
            res.status(200).json(product)
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

};

const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const newProduct: tProduct = req.body
        const createdProduct: tProduct = await productsService.addProduct(newProduct)
        res.status(200).json({ success: "added Sucssesfuli" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}

const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const ProductId: number = Number(req.params.id);
        const ProductForUpdate: tProduct = req.body;
        ProductForUpdate.id = ProductId
        const updatedProduct: boolean | tProduct = await productsService.updateProduct(ProductForUpdate);
        if (updatedProduct === false) {
            res.json({ error: 'Product has not exist' })
            return
        }
        res.status(200).json({ success: "updated Sucssesfuli" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const ProductId: number = Number(req.params.id)
        const deletedProduct : boolean | tProduct = await productsService.deleteProduct(ProductId)
        if (deletedProduct === false) {
            res.send('Product does not exist')
            return 
        }
        res.status(200).json({ success: "deleted Sucssesfuli" })

    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }


}

const updateProperty = async (req: Request, res: Response): Promise<void> => {
    try {
        const productId : number = Number(req.params.id);
        const propertyForUpdate : tProduct = req.body;
        const property: keyof tProduct = Object.keys(propertyForUpdate)[0] as keyof tProduct
        const propertyValue: tProduct[keyof tProduct] = propertyForUpdate[property]
        const updatedProduct: boolean | tProduct = await productsService.updateProperty(productId, property, propertyValue);
        if (updatedProduct === false) {
            res.send('Product has not exist')
            return
        }
        res.status(200).json({ success: "property updated ucssesfuli" })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "server error" })
    }

}


const funcs = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    updateProperty
}
export default funcs

