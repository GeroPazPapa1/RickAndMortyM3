const axios = require('axios');
//const { KEY, URL } = process.env;
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req, res) => {
    const { id } = req.params;
    axios
    .get(`${URL}${id}`)
    .then((response) => {
    //const {id, name, species, image, gender} = response.data; // igual a la respuesta
    const objChar={
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

module.exports = getCharById;

/*// VARIABLES DE ENTORNO
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