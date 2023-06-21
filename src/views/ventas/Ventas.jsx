import { useEffect, useState } from 'react'
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
                if(response.ok) {
                    const res = await response.json()
                    setVentas(res)
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
            {console.log(ventas)}
            <h1>Ventas</h1>
            <table>
                <thead>
                    <tr>
                        <th>Fecha de Venta</th>
                        <th>Comprador</th>
                        <th>Vendedor</th>
                        <th>Juego</th>
                        <th>Precio de juego</th>
                        <th>Monto de Venta</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map( i => (
                        <tr key={i.idVentaEntrada}>
                            <td>{i.fechaVenta}</td>
                            <td>{i.compradorEntrada.nombreComprador + ' ' + i.compradorEntrada.apellidoComprador}</td>
                            <td>{i.empleadoVendedor.nombreEmpleado + ' ' + i.empleadoVendedor.apellidoEmpleado}</td>
                            <td>{i.entrada.juego.nombreJuego}</td>
                            <td>{i.entrada.juego.precioJuego}</td>
                            <td>{i.montoVenta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}

export default Ventas
