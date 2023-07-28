//en back no es con import http, es con const http
// RUTAS
// rickandmorty/character/id
/************************************************************************************************/
/*require("dotenv").config();
const express = require('express');
const router = require('./routes');
const morgan = require("morgan");
const cors = require('cors');

const PORT = process.env.PORT || 3002; /* de esta manera estamos logrando
 que cuando hagamos el despliegue automanticamente crea en las variales de
  entorno, un numero de puerto donde nosotros vamos a estar escuchando, pero
   eso sera cuando este desplegado, cuando NO este desplegado, lo vamos a tener
    que poner nosotros a mano. El puerto q vamos a utilizar, sera el que me proveea
     el host, y si no, el de mi pc, q es 3001


const server = express();
server.use(cors());
server.use(express.json()); // esto lo transformo en objeto
server.use(morgan("dev"))

server.use("/", router);


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); */