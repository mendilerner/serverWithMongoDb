import jsonfile from 'jsonfile';
import path from 'path'
import { tProduct } from './interfaces.products';
const FILE: string = path.join(__dirname, '../../../DB/products.json');

const getProducts = async (): Promise<tProduct[]> => {
    const data: tProduct[] = await jsonfile.readFile(FILE);
    return data
}

const getProduct = async (_id: number): Promise<tProduct | undefined> => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    const product: tProduct | undefined = products.find((product) => product.id === _id);
    return product


}

const addProduct = async (newProduct: tProduct): Promise<tProduct> => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    const newId: number = getMaxUserId(products) + 1
    newProduct.id = newId
    products.push(newProduct)
    await jsonfile.writeFile(FILE, products)
    return newProduct
}


const updateProduct = async (productForUpdate: tProduct): Promise<tProduct | boolean> => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    let productIndex: number = products.findIndex((product) => product.id === productForUpdate.id)
    if (productIndex === -1) {
        return false
    }
    products[productIndex] = productForUpdate;
    await jsonfile.writeFile(FILE, products)
    return productForUpdate
}

const deleteProduct = async (productId: number): Promise<tProduct| boolean> => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    let productIndex: number = products.findIndex((product) => product.id === productId)
    if (productIndex === -1) {
        return false
    }
    const deletedProduct: tProduct = products[productIndex]
    products.splice(productIndex, 1)
    await jsonfile.writeFile(FILE, products)
    return deletedProduct
}

const updateProperty = async <K extends keyof tProduct>(_id: number, property: K, propertyValue: tProduct[K]) => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    let productIndex: number = products.findIndex((product) => product.id === _id)
    if (productIndex === -1) {
        return false
    }
    const currentProduct: tProduct = products[productIndex]
    currentProduct[property] = propertyValue;
    await jsonfile.writeFile(FILE, products)
    return products[productIndex]
}


const addQuantity = async (_quantitySize: number): Promise<void> => {
    const products: tProduct[] = await jsonfile.readFile(FILE);
    products.forEach(product => {
        product.quantity = Math.round(Math.random() * _quantitySize)
    });
    await jsonfile.writeFile(FILE, products)
}


function getMaxUserId(_elements: tProduct[]) {
    let maxId: number = _elements[0].id as number
    for (const element of _elements) {
        if (element.id as number > maxId) {
            maxId = element.id as number;
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
}
export default funcs