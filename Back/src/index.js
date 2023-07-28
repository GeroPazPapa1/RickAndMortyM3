/*const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require ("../controllers/getCharDetail");
const login = require ("../controllers/login");
const { postFav, deleteFav } = require ("../controllers/handlerFavorite");
/*let favs = require("../utils/favs")



// EXPRESS ES "UNOPINIONATED", no te dice que tenes que hacer exactamente ni te exige una estructura determina
// a raiz de esto es q es muy flexible, por eso hay varias maneras de estructurar una aplicacion
// ES DECIR LO QUE HAY QUE HACER, PERO NO HACERLO

const router = Router();

router.get("/login", login);

router.get("/character/:id", getCharById);

router.get("/detail/:id", getCharDetail);

/********LO QUE ESTA DEBAJO LO VAMOS A LLEVAR Y MODULARIZAR*******************************

router.post("/rickandmorty/fav", (req, res) => {
    postFav(req,res)
});


router.delete("/rickandmorty/fav/:id", (req, res) => {
    deleteFav(req,res)
});


/*router.get("/loquesea", (req, res) => { // se encarga de decir lo que tenemos que hacer, no encargar, hay que hacer algo de las opciones que estan abajo?
    // hacer lo que tenga que hacer
    // extraer la informacion que me lelga por params
    // llamar a una funcion... que me haga el llamado al servicio externo
    // guardar informacion en la base de datos
})

module.exports = router;
*/

/***********************************ARRIBA MIO- ABAJO PROYECT***********************/
require("dotenv").config(); // Agrega al objeto "process" en la prop "env" nuestras variables
const { PORT, PASSWORD } = process.env;

const server = require("./app");
//const {conn} = require('./DB_connection')

server.listen(PORT, () => {
     //await conn.sync({force: true})
  console.log("Server raised in port: " + PORT);
});
