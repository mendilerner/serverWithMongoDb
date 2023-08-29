import productsDal from './dal.products'
import { tProduct } from './interfaces.products';

const getProducts = async (): Promise<tProduct[]> => {
    const users: tProduct[] = await productsDal.getProducts();
    return users;
};

const getProduct = async (_id: number): Promise<tProduct | undefined> => {
    const product : tProduct | undefined = await productsDal.getProduct(_id);
    return product;
};

const addProduct = async (newProduct: tProduct): Promise<tProduct> => {
    const createdProduct : tProduct = await productsDal.addProduct(newProduct);
    return createdProduct
}

const updateProduct = async (productForUpdate: tProduct): Promise<tProduct | boolean> => {
    const updatedProduct: tProduct | boolean  = await productsDal.updateProduct(productForUpdate);
    return updatedProduct
}

const deleteProduct = async (ProductId : number) : Promise<tProduct | boolean> => {
    const deletedProduct: tProduct | boolean = await productsDal.deleteProduct(ProductId);
    return deletedProduct
}

const updateProperty = async <K extends keyof tProduct>(id: number, property: K, propertyValue: tProduct[K]) : Promise<tProduct | boolean> => {
    const updatedProduct = await productsDal.updateProperty(id, property, propertyValue);
    return updatedProduct
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