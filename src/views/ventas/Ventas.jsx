import { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import './ventasStyles.scss'

const Ventas = () => {

    const [ventas, setVentas] = useState([])

    useEffect(() => {
        handleGetVentas()
    }, [])

    const handleGetVentas = () => {

        const getVentasURL = 'http://localhost:8080/ventas-entradas'

        try {
            fetch(getVentasURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
            .then( async (response) => {
                console.log("res", response);
                if(response.ok) {
                    const res = await response.json()
                    setVentas(res)
                    console.log('ventas', ventas);
                } else {
                    console.log('Hay un error')
                }
            })
            .catch((err) => {
                console.log('Error .then: ', err)
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <main className='ventas_container'>
            <Navbar type={'empleadoAdministrativo'} />
            <h1>Ventas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Fecha de Venta</th>
                        <th>Vendedor</th>
                        <th>Juego</th>
                        <th>Precio de juego</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map( i => (
                        <tr key={i.idVentaEntrada}>
                            {/* {console.log('item: ', i)} */}
                            <td>{i.entrada.fechaHoraUtilizacion}</td>
                            <td>{i.empleado.nombreEmpleado + ' ' + i.empleado.apellidoEmpleado}</td>
                            <td>{i.entrada.juego.nombreJuego}</td>
                            <td>{i.entrada.juego.precioJuego}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </main>
    )
}

export default Ventas
