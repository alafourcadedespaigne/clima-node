const axios = require('axios');


const getLugarLatLng = async (direccion) => {

    let encodeUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyC1d7yVFk1BoQX8VWfbH1gHrmU3tuBr6Rk`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;


    return {

        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng

    }

}


module.exports = {
    getLugarLatLng
}







// const getLugarLatLng = (direccion) => {



//     let encodeUrl = encodeURI(direccion)

//     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyC1d7yVFk1BoQX8VWfbH1gHrmU3tuBr6Rk`)
//         .then(resp => {

//             let location = resp.data.results[0];
//             let coordenadas = location.geometry.location;


//             console.log(`Dirección formateada: ${location.formatted_address}`);
//             console.log(`Latitud: ${coordenadas.lat}`);
//             console.log(`Longitud: ${coordenadas.lng}`);

//         })
//         .catch(e => console.log('ERROR !!!', e));


//     return {

//         direccion,
//         lat,
//         lng

//     }

// }

