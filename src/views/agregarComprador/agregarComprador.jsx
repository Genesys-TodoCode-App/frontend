import './agregarcompradorstyles.scss'

const AgregarComprador = () => {
  return (
    <main className='agregarComprador_container'>
      <h1>Agregar Comprador</h1>
      <form className='agregarComprador_form'>
        <label htmlFor="nombre">Nombre:</label>
        <input className='form_field' type="text" id="nombre" name="nombre" />

        <label htmlFor="apellido">Apellido:</label>
        <input className='form_field' type="text" id="apellido" name="apellido" />

        <label htmlFor="dni">DNI:</label>
        <input className='form_field' type="number" id="dni" name="dni" />

        <button className='submit_buyer'>Agregar Comprador</button>
      </form>
    </main>
  )
}

export default AgregarComprador