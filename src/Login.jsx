import './Login.scss'

const Login = () => {

  return(
    <main className='login_container'>
      <h1>Bienvenido a CodeLand!</h1>
      <form className='login_form'>

        <label htmlFor="empleado">Tipo de Empleado:</label>
        <select className='form_field' id="empleado" name="empleado">
          <option value="administrativo">Empleado Administrativo</option>
          <option value="juego">Empleado de Juego</option>
        </select>

        <label htmlFor="usuario">Usuario:</label>
        <input className='form_field' type="text" id="usuario" name="usuario" />

        <label htmlFor="contraseña">Contraseña:</label>
        <input className='form_field' type="password" id="contraseña" name="contraseña" />

        <input className='submit_btn' type="submit" value="Enviar" />
      </form>
    </main>
  )

}

export default Login
