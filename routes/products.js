
import { ProductsController } from '../controller/products.js';

export class ProductsRouter {

    static async get() {
        const products = await ProductsController.getProducts();
        return products;
    }

    static async getId(productId) {
        const product = await ProductsController.getProduct(productId);
        return product;
    }

    static async delete(productId){
        const response = await ProductsController.deleteProduct(productId);
        return response;
    }

    static async post(productData){
        const response = await ProductsController.postProduct(productData);
        return response;
    }
}
