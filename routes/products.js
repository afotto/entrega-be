
import { ProductsController } from '../controller/products.js';

export class ProductsRouter {

    static async get() {
        const products = await ProductsController.getProducts();
        return products;
    }
}
