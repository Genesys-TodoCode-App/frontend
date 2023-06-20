import { useState } from 'react'
import './agregarcompradorstyles.scss'

const AgregarComprador = () => {
  
  const initialState = {
    "nombreComprador": "",
    "apellidoComprador": "",
    "dniComprador": "",
    "correoElectronicoComprador": "",
    "paseDeOro": false
  }

  const [comprador, setComprador] = useState(initialState)

  const  handleChange = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value
    })
  }

  const postComprador = 'http://localhost:8080/compradores'

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      fetch(postComprador, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comprador)
      })
      .then( async (response) => {
        if(response.ok) {
          // const res = await response.json()
          console.log('comprador venta ', response);
        } else {
          console.log('Hay un error no se donde')
        }
      })
      .catch((err) => {
        console.log('Error: ', err)
      })  
    } catch (error) {
      console.log('Hubuo un error: ', error)
    }
  }

  return (
    <main className='agregarComprador_container'>
      <h1>Agregar Comprador</h1>
      <form className='agregarComprador_form' onSubmit={e => handleSubmit(e)}>
        <label htmlFor="nombreComprador">Nombre:</label>
        <input className='form_field' type="text" id="nombreComprador" name="nombreComprador" value={comprador.nombreComprador} onChange={ e => handleChange(e)} />

        <label htmlFor="apellidoComprador">Apellido:</label>
        <input className='form_field' type="text" id="apellidoComprador" name="apellidoComprador" value={comprador.apellidoComprador} onChange={ e => handleChange(e)} />

        <label htmlFor="dniComprador">DNI:</label>
        <input className='form_field' type="number" id="dniComprador" name="dniComprador" value={comprador.dniComprador} onChange={ e => handleChange(e)} />

        <label htmlFor="correoElectronicoComprador">Email:</label>
        <input className='form_field' type="email" id="correoElectronicoComprador" name="correoElectronicoComprador" value={comprador.correoElectronicoComprador} onChange={ e => handleChange(e)} />

        <label htmlFor="paseDeOro">Pase de Oro:</label>
        <input className='form_field' type="checkbox" id="paseDeOro" name="paseDeOro" value={comprador.paseDeOro} onChange={ e => handleChange(e)} />

        <button className='submit_buyer' type='submit'>Agregar Comprador</button>
      </form>
    </main>
  )
}

export default AgregarComprador