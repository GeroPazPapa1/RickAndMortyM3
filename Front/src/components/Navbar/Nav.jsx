/*import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';



// este es el ejercicio 5 de hacerle llegar la funcion a la searchBar
export default function Nav(props) {
    //proprs= {onSearch: function}
    return (
    <div className={styles.div}>
        <NavLink style={(isActive) => (isActive ? { color:"gold" } : null)}
        to="/"> WELCOME </NavLink>
        <NavLink style={(isActive) => (isActive ? { color:"gold" } : null)}
         to="/about"> ABOUT </NavLink>
        <NavLink style={(isActive) => (isActive ? { color:"gold" } : null)}
         to="/home"> HOME </NavLink>
         <NavLink style={(isActive) => (isActive ? { color:"gold" } : null)}
         to="/create"> ADD CHARACTER! </NavLink>
         
     <SearchBar onSearch={props.onSearch} />
    </div>
    );
}
*/
/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Link to="/home">HOME</Link>
      <Link to="/favorites">FAVS ❤️</Link>
      {/* <Link to="/create">ADD CHARACTER!</Link> */}
      <SearchBar onSearch={props.onSearch} />
      <Link to="/about">ABOUT</Link>
      <button className={style.btn} onClick={props.out}>LOGOUT</button>
    </div>
  );
}
