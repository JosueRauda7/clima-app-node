// AXIOS
const axios = require('axios');

const getLugarLatLong = async ( dir ) => {

    const encoderUrl = encodeURI(dir); //Parsear a Url, por si hay espacios

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ dir }`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '4aff40009dmsh2e964ed8b87e2efp13fe81jsnbefce81c92a0'
        }
    });
    
    const respuesta = await instance.get();

    if(respuesta.data.Results == null){
        throw new Error(`No hay resultados para ${ dir }`);
    }

    //Abstracción de respuesta de interés
    const data = respuesta.data.Results[0];
    //Datos del resultado
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLong
};