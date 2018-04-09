const axios = require('axios');

const getClima = async (lat, lng) => {

    //Usando axios

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=4637f74ace8b02ba01c21363f5a80eb7`)

    // if (resp.cod != 200) {
    //     throw new Error(`Hay errores con la latitud y la longitud proporcionada lat: ${lat} lon: ${lng}`);
    // }

    let parametros = resp.data.main;



    return {

        temperatura: parametros.temp,
        presion: parametros.pressure,
        humedad: parametros.humedad,
        temp_min: parametros.temp_min,
        temp_max: parametros.temp_max

    }


}

module.exports = {

    getClima
}