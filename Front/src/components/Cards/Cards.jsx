/*import React from 'react';

/*import styles from './Cards.module.css'*/

/// JORGE PONE ASI: export default function Cards(props) {
// y asi: const Cards(props) => {
   // [{},{},{},{},{},{},{},{},{},{},{},]
   // el map se para sobre cada personaje
   // pj === personaje
   //console.log("cards", props.characters);

  /* const padre = {
      display: "flex",
   };
   
// MATIA/HERAN ASI COMO ESTA:
import Card from "../Card/Card";

const Cards = (props) => {
   return (
      <>
      {props.users.map((user) => {
         return <Card name={user.name} email={user.email} />;
         })}
      </>
   );
};

export default Cards;



      /*<div className={styles.div}>
      {props.characters.map((pj) => ( // aca con esta retornado en cada vuelta por c/u de las card
      <Card
         key={pj.id}
         name={pj.name}
         species={pj.species} 
         onClose={() => window.alert('Soy la funcion onClose')}
         gender={pj.gender}
         status={pj.status} 
         image={pj.image}
         origin={pj.origin.name}   
         />
      ))}
   </div>
   );
};*/

/*export default Cards;*/



//**********************************CLASE ESATADOS Y CICLOS con hernan******************** */
/*
import Card from "../Card/Card";
import styles from './Cards.module.css'

export default function Cards(props) {
  return (
    <div className={styles.div}>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          onClose={props.onClose}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin.name}
        />
      ))}
    </div>
  );
}
*/
/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import Card from "./Singular/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.container}>
      {props.characters.map((pj) => (
        <Card
          key={pj.id}
          id={pj.id}
          name={pj.name}
          species={pj.species}
          onClose={props.onClose}
          gender={pj.gender}
          status={pj.status}
          image={pj.image}
          origin={pj.origin.name}
        />
      ))}
    </div>
  );
}
