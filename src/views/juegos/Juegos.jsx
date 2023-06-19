// import juegos from "./mockJuegos.js";
import { useEffect, useState } from 'react'
import Card from "../../components/cardJuego/Card.jsx";
import "./juegosStyles.scss";

const Juegos = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(() => {
        handleGetJuegos()
    }, [])
    
    const getJuegosURL = 'http://localhost:8080/juegos'

    const handleGetJuegos = async() => {
        try {
            fetch(getJuegosURL, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
              })
              .then( async (response) => {
                  if(response.ok) {
                    const res = await response.json()
                    setJuegos(res);
                    console.log('juegos ', res);
                  } else {
                    console.log('Hay un error')
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
        <main className="juegos_container">
            <h1>Juegos</h1>
            <section className="cards_juegos">
                {juegos?.map((juego) => (
                    <Card
                        key={juego.idJuego}
                        id={juego.idJuego}
                        nombre={juego.nombreJuego}
                        descripcion={juego.descripcion}
                        foto={juego.foto}
                        horario={juego.horario}
                        capacidad={juego.capacidad}
                        precio={juego.precioJuego}
                    />
                ))}
            </section>
        </main>
    );
};

export default Juegos;
