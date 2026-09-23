import {ProductsRouter} from './routes/products.js';

const args = process.argv.slice(2); 

switch (args[0]) {
    case 'GET':
        const data = args[1];
        //console.log('Comando GET recibido con clave: ' + data);

        if (data === 'products') {
            const products = await ProductsRouter.get();
            console.log(products.data);
        } else if (data.includes("products/")) {
            const productId = data.split("/")[1];
            //console.log(`Comando GET recibido con ID: ${productId}`);
            const product = await ProductsRouter.getId(productId);
            console.log(product.data);
        } else {
            console.log('No se recibieron claves: products o products/Id para GET');
        }
        break;
    case 'DELETE':
        const dataDel = args[1];

        if (dataDel.includes("products/")) {
            const productId = dataDel.split("/")[1];
            const response = await ProductsRouter.delete(productId);
            if (response.status === 200) {
                console.log(`Producto con ID ${productId} eliminado correctamente.`);
            }
            if (response.status === 400) {
                console.log(`Solicitud incorrecta.`);
            }
        } else {
            console.log('No se recibieron claves: products/Id para DELETE');
        }
        break;
    case 'POST':
        const title = args[1];
        const price = args[2];
        const category = args[3];

        if (title && price && category){
            const response = await ProductsRouter.post({ title:title,  category:category, price:price });
            //console.log(response.data);
            if (response.status === 201) {
                console.log(`Producto ID: ${response.data.id} creado correctamente.`);
            }
        } else {
            console.log('No se recibieron todos los parámetros requeridos para POST');
        }
        break;
    default:
        console.log('Comando no reconocido. Utilice GET, GET Id, POST O DELETE');
        break;
}


