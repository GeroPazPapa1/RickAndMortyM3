/*import { useState } from "react";

 const SearchBar = (props) => {
   const [id, setId] = useState("");

   const handleChange = (event) => {
    setId(event.target.value);
   };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <button>Buscar</button>
    </>
  );
};

export default SearchBar;*/

//**********************************CLASE ESATADOS Y CICLOS con hernan**************** */
/*
import React, {useState} from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

  const [id, setId] = useState(""); 

  const handleChange = (evento) => { // con este evento vamos a actualizar lo q dice el id
    // console.log("funciona el handle", evento.target.value);
    setId(evento.target.value); //(2)
  };
// voy a escribir los pasos con numeros a la par
  return (
    <div className={styles.div}>
      <input 
        className={styles.input}
        type="text" 
        placeholder="Busca un personaje perri..." 
        onChange={handleChange} //(1) es a es la funcion q hace q se actualice ese cambio, y actives la funcion de handlechange, o sea que cuando escriba algo en el input, deberia ver lo escrito
        value={id} //(2)
      /> {/* todo esto del value, del setid evento target, y del onchange, lo hacemos al final de cuenta para que, previamente se guarde el valor de lo que se escribe en el nav, para validar esa informacion o formatearla o lo que sea, y no directamente lo que escribe el usuario en el placeholder*/
 /*     <button
       className={styles.btn}
       onClick={() => { // con esto decimos que cuando haga click, o sea, onclick, se activa la arrow function 
        props.onSearch(id); // ahi entonces, llama al onSearch y le pasa el id
       }}
       >
        Agregar
        </button>
    </div>
  );
}
*/


// FETCH Y AXIOS SON PARA PEDIR INFORMACION, LO Q ANTES HACIAMOS CON $.GET("URL", FUNCTION(RESPUESTA))
// PERO AHORA SE PIDE ESA INFO, O SEA, UNA INFORAMCION QUE AHORA ESTA ONLINE, USAMOS AXIOS O FETCH
// EN ESTE EJEMPLO USAMOS AXIOS PARA PEDIR CON UN ID, QUE PERSONAJE NOS ENTREGA DESDE LA URL DE RICK AND MORTI
//





/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import React, { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  
  const [id, setId] = useState("");

  const handleChange = (evento) => {
    // console.log("funciona el handle", evento.target.value);
    setId(evento.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="text"
        placeholder="Busca un personaje..."
        onChange={handleChange}
        value={id}
      />
      <button
        className={style.button}
        onClick={() => {
          props.onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}

// input.addEventListener("on change", function(evento){ })
