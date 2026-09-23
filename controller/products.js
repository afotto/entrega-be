import { ProductsModel } from '../models/products.js';


export class ProductsController {

    static async getProducts() {

        const products = await ProductsModel.getProducts();
        
        return products;
    }

    static async getProduct(productId) {

        const product = await ProductsModel.getProduct(productId);
        return product;
    }

    static async deleteProduct(productId){
        const response = await ProductsModel.deleteProduct(productId);
        return response;
    }

    static async postProduct(productData){
        const response = await ProductsModel.postProduct(productData);
        return response;
    }
}