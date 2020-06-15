// Lugar
const lugar = require('./lugar/lugar');

//Clima
const clima = require('./clima/clima');

// Yargs

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        description: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// const encoderUrl = encodeURI(argv.direccion); //Parsear a Url, por si hay espacios
// console.log(encoderUrl);

// clima.getClima(arg, -74.000000)
// .then(console.log)
// .catch(console.log)

const getInfo = async (direccion) => {
    try
    {
        let location = await lugar.getLugarLatLong(direccion).then(resp => resp);
        let weather = await clima.getClima(location.lat, location.lng);

        return `El clima de ${ location.direccion } es de ${ weather } °C`;
    }
    catch
    {
        return `No se pudo encontrar el clima de ${ direccion }`
    }
}

getInfo(argv.direccion)
.then(console.log)
.catch(console.log);