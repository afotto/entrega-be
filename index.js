import {ProductsRouter} from './routes/products.js';

const args = process.argv.slice(2); 

switch (args[0]) {
    case 'GET':
        const data = args[1];
        if (args[1]){
            const products = await ProductsRouter.get();
            console.log(products.data);
        } else {
            console.log('No se recibieron clave products para GET');
        }
        break;
    default:
        console.log('Comando no reconocido. Utilice GET, POST, UPDATE O DELETE');
        break;
}


