const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const color = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion) => {

    try {
        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima en ${coord.direccion} es de ${color.green(temp.temperatura)} grados centígrados`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e)); 