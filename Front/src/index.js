/*import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  //enciero mi app en browser router para que funcione la config, de las routes en app.js
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);



/*
// este es el ESTADO INICIAL, el 1ro q necesita
const initialState = { 
  name: "Jorge",
  verdad: true,
  num: 0,
};




const { createStore } = require("redux");

// ESTE DE ABAJO ES EL REDUCER:
//Lo que decimos aca es: Si yo recibo la action, o sea, la action type es igual a aumentar_contador es igual a aumentar, el reducer va a retornar un estado nuevo. Luego, retorna un estado nuevo que va a ser una copia del estado donde modifica a num: state.num +1,
const reducer = (state = initialState, action) => { //aca se arma la maquinita, el REDUCER que recibee siempre una actions
  // {type: AUMENTAR_CONTADOR}
  if (action.type === "AUMENTAR_CONTADOR"){
    return {
      ...state,
      num: state.num + 1,
    };
  }
  // {type: CAMBIAR_NOMBRE, payload: Maria}
  if (action.type === "CAMBIAR_NOMBRE") {
    return {
      ...state,
      name: action.payload,
    };
  }
};

// ESTE DE ABAJO ES EL STORE:
const store = createStore(reducer)

const action1 = { type: "AUMENTAR_CONTADOR"};

// con dispatch, le mando la action completa
store.dispatch(action1);



/*
ESTO:
const action1 = { type: "AUMENTAR_CONTADOR"};

ES LO MISMO Q ESTO:

const persona = {
    nombre: "Jorge",

AMBOS SON SIMPLEMENTE UN OBJETO
}


*/

/*******************ARRIBA MIO - ABAJO MIO****************************** */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store} >
  {/* // encierro mi app en Browser Router para que funcione la config. de las Routes en App.js */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
