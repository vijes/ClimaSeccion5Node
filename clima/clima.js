const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=61f18e0a810e74c9213733b02e68fc5c&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}