const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log('Se obtuvo la siguiente direccion', resp);

//     })
//     .catch(err => {
//         console.log('Error al momento de obtener la direccion', err);

//     });


// clima.getClima(48.860001, 2.350000)
//     .then(console.log)
//     .catch(err => console.log(err));


const getInfoClima = () => {


};