//import './App.css';
/*import Cards from './components/Cards/Cards.jsx';
//import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
       <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         {/*<Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />*/
      //</div>
  //);
//}

//export default App;*/


//*********************************************************************** */



/*function App() {
   const [users, setUsers] = useState([ // user es un estado y setUsers una funcion. 
   // useState([]) es un hook
      { name: "Jorge", email: "jvega@gmail.com" },
   ]); 


   //a partir de ahora tengo un estado que se llama users = []
   // setUsers es la funcion encargada de modificar ese estado

   return (
      <div className='App'>
         <Cards users={users}/> //al poner el users, es una prop, y si cambia arriba, cambia aqui tmbn
      </div>
   );
}

export default App;*/



//*********************************************************************** */



/*import Cards from  "./components/Cards/Cards.jsx";
import Nav from "components/Nav/Nav.jsx";
import { useState } from "react";
import style from "./App.module.css";


function App() {
   const [character, setCharacters] = useState([]);
   return (
   <div className='App' style={{ padding: "25px"}}>
      <div className={style.nav}>
         <Nav/>
      </div>
      <div>
         <Cards characters={characters} />
         </div>
      </div>
   );
}

export default App;*/

//**********************************CLASE ESATADOS Y CICLOS con hernan**************** */
//APP ES EL COMPONENTE PADRE DONDE VA LA LOGICA
/*
import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav.jsx";
import About from "./components/About/About";
import Form from './components/Form/Form';
import Detail from "./components/Detail/Detail";
import axios from "axios";
import "./App.css";



function App() {


// const array = useState ([]); // que retorna esta funcion cuando la invoca? Retorna un array [state, setState]
// const state = array [0]
// const state = array [1]




// EVENT HANDLERS
   function onSearch (dato) {
      //agrega personas de characters
      axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then(( respuesta ) => {
         if (respuesta.data.name) { 
            setCharacters((oldChars) => [...oldChars, respuesta.data]);
         } else {
         }
      })
      .catch((err) => window.alert("No hay personajes con este ID!"));
   }  

   function onClose (id) {
      // 11
      //elimina personas de characters
      // como modifico characters? con setCharacters
      setCharacters(
      characters.filter(pj => { // .filter, devuelve un arreglo nuevo, fitrado
         return pj.id !== id; //para filtrarlo, retorno todos los pj.id, que sean distintos a los que recibo por parametro
      //              !== 11 // podes poner id o poner number. es una buena practica
      // [{1}, {2}, {11}, {20}]
      }) 
      );
   }


   // HOOKS
   const [characters, setCharacters] = useState([]); // imaginar q tenia 2 objetos ahora agrego 1 tercero
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "ejemplo@gmail.com";
   const PASSWORD = "123456";

   function login(user) {
      if (user.password === PASSWORD && user.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert ("Email o password incorrecto")
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   

   /*const location = useLocation();
   console.log(location.pathname);*/



/*
   // RENDER
   return (
      <div className="App">
         { "/" && <Nav onSearch={onSearch} />
         }
         <hr />
         <Routes>
               <Route
                  path="/home"
                  element={<Home characters={characters} onClose={onClose}/>} />
               <Route path="/about" element={<About />} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/" element={<Form login={login} />} />
               
         
         </Routes>
      </div>
    );
  }

export default App;

// lo que tenemos con axios pero con fetch (este no se debe instalar)
// es asi:
/*
axios(`https://rickandmortyapi.com/api/character/${dato}`)
      .then( respuesta => respuesta.json())
      .then( respuestaJson) => {
         if (respuestaJson.data.name) { 
            setCharacters((oldChars) => [...oldChars, respuestaJson.data]);
         } else {
         }
      })
      .catch((err) => window.alert("No hay personajes con este ID!"));

*/



/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import style from "./App.module.css";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate(); // Importar useNavigate !!!!!
  const [access, setAccess] = React.useState(false);

  function logout() {
    setAccess(false);
  }
  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3002/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  function onSearch(dato) {
    // agrega personajes a characters
    axios(`http://localhost:3002/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          // if("yaExiste") return
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } else {
        }
      })
      .catch((err) => alert(err.response.data.error));
  }

  function onClose(id) {
    // elimina personajes de characters
    // window.alert("onClose :)")
    setCharacters(
      characters.filter((pj) => {
        return pj.id !== Number(id);
      })
    );
  }

  const [characters, setCharacters] = useState([]); // [{}]

  const location = useLocation();

  return (
    <div className={style.App}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
      <Routes>
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

// lo que tenemos con axios pero con fetch

// fetch(`https://rickandmortyapi.com/api/character/${dato}`)
// .then(respuesta => respuesta.json())
// .then((respuestaJson) => {
//   if (respuestaJson.name) {
//     setCharacters((oldChars) => [...oldChars, respuestaJson]);
//   } else {
//   }
// })
// .catch((err) => window.alert("¡No hay personajes con este ID!"));
