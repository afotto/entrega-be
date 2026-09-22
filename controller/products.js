import { ProductsModel } from '../models/products.js';


export class ProductsController {

    static async getProducts() {

        const products = await ProductsModel.getProducts();
        
        return products;
    }
}