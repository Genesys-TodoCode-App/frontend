import { useState } from 'react'
import './Login.scss'

const Login = () => {

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

    const loginURL = `http://localhost:8080/login?usuario=${user.usuario}&contrasenia=${user.contrasenia}`

    fetch(loginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" }      
    })
    .then( async (response) => {
        if(response.ok) {
          const res = await response.json()  
          setUser(initialState)
          if(res.rolEmpleado == 'EMPLEADO_JUEGO'){
            window.location.href = "juegos"
          } else {
            window.location.href = "add-buyer"
          }
        } else {
          alert('Hay un error en el Usuario o Contraseña')
        }
      })
    .catch((err) => {
      console.log('error: ', err)
    })
  } 

  return(
    <main className='login_container'>
      <h1>Bienvenido a CodeLand!</h1>
      <form className='login_form' onSubmit={handleSubmit}>

        <label htmlFor="usuario">Usuario:</label>
        <input className='form_field' type="text" id="usuario" name="usuario" value={user.usuario} onChange={e => handleChange(e)} />

        <label htmlFor="contrasenia">Contraseña:</label>
        <input className='form_field' type="password" id="contrasenia" name="contrasenia" value={user.contrasenia} onChange={e => handleChange(e)} />

        <input className='submit_btn' type="submit" value="Enviar" />
      </form>
    </main>
  )

}

export default Login
