/*import React  from "react";
import Cards from "../Cards/Cards";

export default function Home(props) {
     
    return (
    <div>
        <span>Home</span>
        <Cards characters={props.characters} onClose={props.onClose} />
    </div>
    );
}

*/
/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import React from "react";
import Cards from "../Cards/Cards";
import style from "./Home.module.css";

export default function Home(props) {
  return (
    <div className={style.container}>
      <Cards characters={props.characters} onClose={props.onClose} />
    </div>
  );
}
