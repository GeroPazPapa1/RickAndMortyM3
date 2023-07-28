/*const axios = require('axios');
//const { KEY, URL } = process.env;
const URL = 'https://rickandmortyapi.com/api/character/';

// Crea una función con el nombre getCharById y expórtala. Recibe por parámetro a los objetos req y res.
async function getCharById(req, res) {
    const { idChar } = req.params;
/*    axios(`${URL}${id}`).then(({ data }) => {
        if (data.error) {
            return res.status(404).send(data.error);
        }

        const { id, name, gender, species, origin, image, status } = data;
        const character = {
        
            id: Number(id),
            name,
            gender,
            species,
            origin,
            image,
            status
        };

        return res.status(200).json(character);
    //const {id, name, species, image, gender} = response.data; // igual a la respuesta
   /* const objChar={
        id: Number(response.data.id),
        name:response.data.name,
        gender:response.data.gender,
        species:response.data.species,
        origin:response.data.origin,
        image:response.data.image,
        status:response.data.status
    }
    res.status(200).json(objChar); // esta es la respuesta q solicitamos arriba
    })
    .catch(  // si llegara a ocurrir un error, va esto 
        (error) => {
        res.status(500).json({ error: error.message });
    });
};


try {
    const apiRequest = await axios(`${URL}${idChar}`)
    const { data } = apiRequest;

    // Se pudo hacer OK la solicitud de axios pero la API no tiene info, entonces me indica un error.
    if (data.error) {
        return res.status(404).send(data.error);
    }

    const { id, name, gender, species, origin, image, status } = data;
    // aca abajo se hizo un desctructuring para hacer objetos literales, objects literal
    const character = {
        
        id: Number(id),
        name,
        gender,
        species,
        origin,
        image,
        status
    };
    return res.status(200).json(character);
    } catch (axiosError) {
    //este sera un error en la solicitud de axios: "estaba ,al la URL y no se pudo hacer el get"
    return res.status(500).send(axiosError.message);
    }
}

module.exports = getCharById;

// VARIABLES DE ENTORNO
// son variables privadas. Le perteneces al proyecto. No se exponen en el codigo
// Se configuran por fuera del codigo de la App, en el entorno

const successH = (response, res) => {
    const { id, image, name, gender, species } = response.data;
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify({ id, image, name, gender, species}));
};

const errorH = (error, res) => {
    res.writeHead(500, { "Content-Type": "text/plain"});
    res.end(error.message);
};

const getCharById = (res, id) => {
    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
} */

/************************ARRIBA MIO - ABAJO NUEVO *********/

const axios = require("axios");
// Crea una constante llamada URL y guarda lo siguiente: "https://rickandmortyapi.com/api/character/".
const URL = "https://rickandmortyapi.com/api/character/";

// Crea una función con el nombre getCharById y expórtala. Recibe por parámetro a los objetos req y res.
async function getCharById(req, res) {
  const { idChar } = req.params; // req.params -> {id: 12}
  // Dentro de la función haz una petición a la API a partir del id que recibes por Params.
  // axios(`${URL}${idChar}`)
  //   .then(({ data }) => {
  //     // Destructuramos la "data" axios {data: {api}, masCosas: "..."}
  //     if (data.error) {
  //       return res.status(404).send(data.error);
  //     }

  //     const { id, name, status, species, origin, image, gender } = data;
  //     const character = {
  //       id: Number(id),
  //       name,
  //       status,
  //       species,
  //       origin, // Enviamos el objecto "origin" porque el front lo espera
  //       image,
  //       gender,
  //     };

  //     // pude hacer la solicitud
  //     return res.status(200).json(character);
  //   })
  //   .catch((axiosError) => {
  //     // Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.
  //     return res.status(500).send(axiosError.message);
  //   });

  try {
    const apiRequest = await axios(`${URL}${idChar}`);
    const { data } = apiRequest;

    // Se pudo hacer OK la solicitud de axios pero la API no tiene info entonces me indica un error.
    if (data.error) {
      return res.status(404).send(data.error);
    }

    const { id, name, status, species, origin, image, gender } = data;
    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin, // Enviamos el objecto "origin" porque el front lo espera
      image,
      gender,
    };
    return res.status(200).json(character);
  } catch (axiosError) {
    // Error en la solicitud de axios por ejemplo: "estaba mal la URL y no se pudo hacer el get"
    return res.status(500).send(axiosError.message);
  }
}

module.exports = { getCharById };