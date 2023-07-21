/*import React from 'react'; //al sacar el useState, lo llevamos al React.useState, dado q hay q destructur para que pasen los test en el check point
import styles from "./Form.module.css";
import validation from "./validation";

export default function Form (props) {
    const [user, setUser] = React.useState({ username: "", email: "", password: ""});
    const [errors, setErrors] = React.useState({}) //para manejar los errores


    function handleSubmit(event) { // para que no se actualice y se pierda la info q venia teniendo al poner datos en el form
        event.preventDefault();
        props.login(user);
        //console.log("submit, tuki");
    }


    // cuando hago click, se ejecuta el handlechange, segundo lo guarda en el estado, dependiendo donde escribi, inpiut, email o passwor, una vez guardado, le llega al input por value y en el input se ve lo que se escribio ya en pantalla. TODO ESTO COMO PARA TENER UN CONTROL DE LO Q SE ESTA ESCRIBIENDO. INCLUSO PARA DECIRLE "POR EJEMPLO, ESTO NO ES UN EMAIL"
    function handleChange(event) { // para pisar  lo q el usuario escribio y que se cambie sus valores se hace con esta funcion. SE ESTA MODIFICANDO EL ESTADO
        setUser({...user, [event.target.name]: event.target.value}); // con esto termino por definir que si elijo name, password o email, modifique ese en particular, al decir .name y .value
        setErrors(validation({...user, [event.target.name]: event.target.value })); // aqui lo guardo, a lo de validate
    } 

    // para validar los errores, como q tenga 8 caracteres o q tenga 1 Mayus por ejemplo
    /*function validation(datos) {
        const regex = new RegExp(/\S+@\S+\.\s+/);

        let incorrect = {};
        if (datos.username.length <= 4) {
            incorrect.username = "Username must be 5 characters long at least";
        } else if (!regex.test(datos.email)) {
            incorrect.email = "You must enter a valid email";
        }    
        return incorrect;
    
}
*/



//... user para no perder los valores y no perderlo, continuar con lo que ya tenia
// sucede cuando hago click en el submit. // label sirve para mostrar info que quiero que es lo que ingreses ahi, por ejemplo username*/}
/*    return (
     <div className={styles.container}>
        <form onSubmit={handleSubmit}> 
            {/*<label>Username</label> 
            <input 
            key="1"
            name='username'
            onChange={handleChange}
            value={user.username} 
            type="text"
            placeholder="username..." />

            <p className={styles.error}>{ errors.username ? errors.username : null }</p>

            <label>Email</label>
            <input 
            key="2"
            name='email'
            onChange={handleChange}
            value={user.email} 
            type="text" 
            placeholder="email..." />

            <p className={styles.error}>{ errors.email ? errors.email : null }</p>

            <label>Password</label>
            <input 
            key="3"
            name='password'
            onChange={handleChange}
            value={user.password} 
            type="password" 
            placeholder="password..." />
            <p className={styles.error}>{ errors.password ? errors.password : null }</p>
            
            <button type="submit">Submit</button> 
        </form>
    </div>
    );
}

/*
const object = {
    name: "hola"
}

const name = "propiedad";
const object = {
    [name]: "hola"
}
Propiedades dinamicas:
si yo quiero q mi objeto no se llame name si no que tome este name [variable] para 
darle el nombre a la propiedad, lo que hago es pasarselo asi [name]: "hola", entonces
al pasarselo entre los corchetes, lo que hace es no tomar literalmente el string, si no
lo que valga la variable name, en este caso: propiedad
*/



/***********************************ARRIBA MIO - ABAJO PROYECT***********************/

import React from "react";
import styles from "./Form.module.css";
import validation from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log(userData); // Para chequear en navegador
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <p className={styles.error}>{errors.email && errors.email}</p>

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <p className={styles.error}>{errors.password && errors.password}</p>

        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
