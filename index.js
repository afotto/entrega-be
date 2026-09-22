const args = process.argv.slice(2); 

switch (args[0]) {
    case 'GET':
        const data = args[1];
        if (args[1]){
            console.log(`Recibimos, ${args[1]} satisfactoriamente!`); 
        } else {
            console.log('No se recibieron datos para GET');
        }
        break;
    default:
        console.log('Comando no reconocido. Utilice GET, POST, UPDATE O DELETE');
        break;
}


