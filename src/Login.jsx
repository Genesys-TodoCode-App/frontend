import { useState } from 'react'
import './Login.scss'
// import { useHistory } from 'react-router-dom'

const Login = () => {

  // const history = useHistory();

  const initialState = {
    usuario: '',
    contrasenia: ''
  }
  const [user, setUser] = useState(initialState)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    
    // console.log('e: ', e.target.usuario.value)
    // console.log('e: ', e.target.contrasenia.value)
    // console.log('user: ', user)

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json));

    const reqBody = {
      usuario: user.usuario,
      contrasenia: user.contrasenia,
    }

    fetch('http://localhost:8080/login', {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: 'post',
      // mode: "no-cors", // cors, *cors, same-origin
      body: JSON.stringify(reqBody),
    })
    .then((response) => {
      console.log(response)
      if(response.ok) {
        Promise.all([response.json(), response.headers])
        setUser(initialState)
        (window.location.href = "juegos")
      } else {
        Promise.reject("Invalid Login Attempt")
      }
    })
    .catch((error) => {
      // Manejar el error de la solicitud
      console.log('hubo un error: ', error)
    });

    // fetch('http://localhost:8080/login', {
    // fetch('https://jsonplaceholder.typicode.com/', {
    //   method: 'POST',
    //   // mode: "no-cors", // cors, *cors, same-origin
    //   // credentials: "same-origin", // include, *same-origin, omit
    //   // body: JSON.stringify({data: user})
    //   // body: {
    //     //   usuario: user.usuario,
    //     //   contrasenia: user.contrasenia
    //     // }
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1,
    //     }),    
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json));
    // .then((response) => {
    //   if (response.ok) {
    //     console.log('login exitoso: ', response)
    //     setUser(initialState);
    //     // history.push('/juegos');
    //   } 
    //   else {
    //     // Manejar el error en caso de fallo en el inicio de sesión
    //     console.log('porque mierda no entra')
    //     console.log('user: ', user)
    //     console.log('response', response)
    //   }
    // })
    // .catch((error) => {
    //   // Manejar el error de la solicitud
    //   console.log('hubo un error: ', error)
    // });
  } 

  return(
    <main className='login_container'>
      <h1>Bienvenido a CodeLand!</h1>
      <form className='login_form' onSubmit={handleSubmit}>

        <label htmlFor="usuario">Usuario:</label>
        <input className='form_field' type="text" id="usuario" name="usuario" value={user.usuario} onChange={ e => handleChange(e) } />

        <label htmlFor="contrasenia">Contraseña:</label>
        <input className='form_field' type="password" id="contrasenia" name="contrasenia" value={user.contrasenia} onChange={ e => handleChange(e) } />

        <input className='submit_btn' type="submit" value="Enviar" />
      </form>
    </main>
  )

}

export default Login
