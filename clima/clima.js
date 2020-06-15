//AXIOS
const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f6e4ea831532cc1ce02713b5ac4fada3&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}