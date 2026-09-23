import axios from 'axios';

export class ProductsModel {

    static async getProducts() {
        
        const products = await axios.get('https://fakestoreapi.com/products');
        return products;

    }

    static async getProduct(productId) {
        const product = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        return product;
    }

    static async deleteProduct(productId){
        const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`);
        return response;
    }

    static async postProduct(productData){
        const response = await axios.post('https://fakestoreapi.com/products/', productData);
        return response;
    }
}