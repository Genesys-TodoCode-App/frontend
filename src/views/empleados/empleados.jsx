import './empleadosStyles.scss'
import mockEmpleados from './mockEmpleados'
import CardEmpleado from '../../components/cardEmpleado/cardEmpleado.jsx'

const Empleados = () => {
  return (
    <main className='empleados_container'>
        <h1>Empleados</h1>
        <section className='empleados'>
            {mockEmpleados.map(i => (
                <CardEmpleado key={i.id} id={i.id} name={i.name} lastname={i.lastname} juego={i.juego} />
            ))}
        </section>
    </main>
  )
}

export default Empleados