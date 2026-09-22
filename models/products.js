import axios from 'axios';

export class ProductsModel {

    static async getProducts() {
        
        const products = await axios.get('https://fakestoreapi.com/products');
        return products;

    }
}