import { useState } from "react";
import { useParams } from "react-router-dom";
import mockJuegos from "../juegos/mockJuegos.js";
import mockCompradores from "./mockCompradores.js";
import "./juegoStyles.scss";

const Juego = () => {
    const [comprador, setComprador] = useState();

    const { id } = useParams();

    const juegoSeleccionado = mockJuegos.filter((juego) => juego.id == id);

    const juego = juegoSeleccionado[0];

    const handleSell = () => {
        alert(`Entrada vendida a ${comprador}`);
    };

    return (
        <main className="juego_container">
            <section className="juego">
                <h1 className="juego_title">{juego.nombre}</h1>
                <img
                    className="juego_img"
                    src={juego.foto}
                    alt={juego.nombre}
                />
                <p className="juego_description">{juego.descripcion}</p>
                <span>Horario: {juego.horario}</span>
                <span>Capacidad: {juego.capacidad}</span>
                <span>precio: $$$</span>
            </section>
            <section className="comprador">
                <select
                    className="select_buyer"
                    id="comprador"
                    name="comprador"
                    value={comprador}
                    onChange={(event) => setComprador(event.target.value)}
                >
                    {mockCompradores.map((comprador) => (
                        <option key={comprador.id} value={comprador.nombre + " " + comprador.apellido}>
                            {comprador.nombre + " " + comprador.apellido}
                        </option>
                    ))}
                </select>
                <button className="sell_game_btn" onClick={handleSell}>
                    Vender
                </button>
            </section>
        </main>
    );
};

export default Juego;
