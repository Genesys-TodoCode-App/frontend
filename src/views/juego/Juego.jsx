import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./juegoStyles.scss";

const Juego = () => {
    const [comprador, setComprador] = useState()
    const [compradores, setCompradores] = useState([
        {
        "idComprador": 1,
        "nombreComprador": "Juan",
        "apellidoComprador": "Pérez",
        "dniComprador": "12345678",
        "correoElectronicoComprador": "juan.perez@example.com",
        "paseDeOro": true
        },
        {
        "idComprador": 2,
        "nombreComprador": "María",
        "apellidoComprador": "González",
        "dniComprador": "87654321",
        "correoElectronicoComprador": "maria.gonzalez@example.com",
        "paseDeOro": false
        },
        {
        "idComprador": 3,
        "nombreComprador": "Pedro",
        "apellidoComprador": "Rodríguez",
        "dniComprador": "98765432",
        "correoElectronicoComprador": "pedro.rodriguez@example.com",
        "paseDeOro": true
        },
    ])

    const [juego, setJuego] = useState({
        "idJuego": 1,
        "nombreJuego": "Montaña Rusa",
        "precioJuego": 10,
        "cobroPaseOro": true,
        "horarios": [
            {
                "idHorarioJuego": 1,
                "horaInicio": "2023-06-19T16:00:00",
                "horaFin": "2023-06-19T20:00:00"
            },
            {
                "idHorarioJuego": 2,
                "horaInicio": "2023-06-20T16:00:00",
                "horaFin": "2023-06-20T20:00:00"
            },
            {
                "idHorarioJuego": 3,
                "horaInicio": "2023-06-21T16:00:00",
                "horaFin": "2023-06-21T20:00:00"
            }
        ]
    })

    useEffect(() => {
        handleGetCompradores()
        handleGetJuego()
    }, [])

    const handleSell = () => {
        alert(`Entrada vendida a ${comprador}`);
    };

    const getCompradoresURL = 'http://localhost:8080/compradores'

    const handleGetCompradores = async() => {
        try {
            fetch(getCompradoresURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
              })
              .then( async (response) => {
                  if(response.ok) {
                    const res = await response.json()
                    // console.log('compradores ', res);
                    setCompradores(res)
                  } else {
                    console.log('Hay un error no se donde')
                  }
                })
              .catch((err) => {
                console.log('Error: ', err)
              })
        } catch (error) {
            console.log('Hubo un error: ', error)
        }
    }
    
    const { id } = useParams();
    const getJuegosURL = `http://localhost:8080/juegos/${id}`

    const handleGetJuego = async() => {
        try {
            fetch(getJuegosURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
              })
              .then( async (response) => {
                  if(response.ok) {
                    const res = await response.json()
                    // console.log('juego ', res);
                    setJuego(res)
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
        <main className="juego_container">
            <section className="juego">
                <h1 className="juego_title">{juego.nombreJuego}</h1>
                {/* <img
                    className="juego_img"
                    src={juego.foto}
                    alt={juego.nombreJuego}
                /> */}
                {/* <p className="juego_description">{juego.descripcion}</p> */}
                {/* {console.log('horario', juego.horarios)} */}
                {/* <span>Horario: {juego.horarios}</span> */}
                <p>Horarios: <br />
                    {juego.horarios.map( i => (
                        <span key={i.idHorarioJuego}>{i.horaInicio + " "} - {i.horaFin + " "} <br /></span>
                    ))}
                </p>
                {/* <span>Capacidad: {juego.capacidad}</span> */}
                <span>precio: ${juego.precioJuego}</span>
            </section>
            <section className="comprador">
                <form>
                    <select
                        className="select_buyer"
                        id="comprador"
                        name="comprador"
                        value={comprador}
                        onChange={(event) => setComprador(event.target.value)}
                    >
                        {compradores.map((c) => (
                            <option key={c.idComprador} value={c.nombreComprador + " " + c.apellidoComprador}>
                                {c.nombreComprador + " " + c.apellidoComprador}
                            </option>
                        ))}
                    </select>
                    <br />
                    <button className="sell_game_btn" onClick={handleSell} type="submit">
                        Vender
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Juego;
