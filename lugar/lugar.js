const axios = require('axios');

const getLugarLatLng = async(direccionBuscar) => {
    const encodeURL = encodeURI(direccionBuscar);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': '2b60276673mshd8a0af738b28870p115dabjsn283ee3edd4a1' }
    });

    // En lugar de llamar esta promesa se puede hacer con funciones asyn y await
    // instance.get()
    //     .then(response => {
    //         console.log(response.data.Results[0]);

    //     })
    //     .catch(err => {
    //         console.log('Error: ', err);

    //     });
    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No existen resultados para la direccion ${direccion}`);
    }
    console.log(resp.data.Results[0]);

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}