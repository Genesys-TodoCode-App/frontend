import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "./juegoStyles.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Juego = () => {
    const [empleado, setEmpleado] = useState()
    // const [compradores, setCompradores] = useState([])

    useEffect(() => {
        handleGetEmpleado()
        // handleGetJuego()
    }, [])

    // const handleSubmit = () => {

    //     const postEntrada = `http://localhost:8080/entradas`

    //     try {
    //         fetch(postEntrada, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(entrada)
    //         })
    //         .then( async (response) => {

    //             if(response.ok) {
    //                 if (response.headers.get("Content-Length") > 0) {
    //                     const res = await response.json();
    //                     alert(`Entrada vendida a ${comprador}`)
    //                     setComprador(res);
    //                 } else {
    //                     alert(`Entrada vendida a ${comprador}`)
    //                     setComprador(response);
    //                 }
    //             } else {
    //                 console.log('Hay un error');
    //             }
    //         })
    //         .catch((err) => {
    //             console.log('Error en el .then: ', err)
    //         })
    //     } catch (error) {
    //         console.log('Hubo un error: ', error)
    //     }
    // }

    // const getCompradoresURL = 'http://localhost:8080/compradores'

    // const handleGetCompradores = async() => {
    //     try {
    //         fetch(getCompradoresURL, {
    //             method: "GET",
    //             headers: { "Content-Type": "application/json" }
    //           })
    //           .then( async (response) => {
    //               if(response.ok) {
    //                 const res = await response.json()
    //                 setCompradores(res)
    //               } else {
    //                 console.log('Hay un error no se donde')
    //               }
    //             })
    //           .catch((err) => {
    //             console.log('Error: ', err)
    //           })
    //     } catch (error) {
    //         console.log('Hubo un error: ', error)
    //     }
    // }
    
    const { id } = useParams();
    const getEmpleadoURL = `http://localhost:8080/empleados/${id}`

    const handleGetEmpleado = async() => {
        try {
            fetch(getEmpleadoURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
              })
              .then( async (response) => {
                  if(response.ok) {
                    const res = await response.json()
                    setEmpleado(res)
                    console.log(empleado);
                  } else {
                    console.log('Hay un error no se donde')
                  }
                })
              .catch((err) => {
                console.log('Error: ', err)
              })
        } catch (error) {
            console.log('error: ', error)
        }
    }

    return (
        <main>
            <Navbar type={'empleadoAdministrativo'} />
            <section>
                {/* <h1 className="juego_title">{juego.nombreJuego}</h1> */}
                {/* <img
                    className="juego_img"
                    src={juego.foto}
                    alt={juego.nombreJuego}
                /> */}
                {/* <span>precio: ${juego.precioJuego}</span> */}
            </section>
            <section>
                <form>
                    {/* <select
                        className="select_buyer"
                        id="comprador"
                        name="comprador"
                        value={comprador}
                        onChange={(event) => setComprador(event.target.value)}
                    >
                        {empleado.map((c) => (
                            <option key={c.idComprador} value={c.nombreComprador + " " + c.apellidoComprador}>
                                {c.nombreComprador + " " + c.apellidoComprador}
                            </option>
                        ))}
                    </select> */}
                    <br />
                    <button className="sell_game_btn" type="submit">
                        Vender
                    </button>
                </form>
            </section>
            {/* <Footer /> */}
        </main>
    );
};

export default Juego;
