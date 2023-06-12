import { Link } from "react-router-dom";
import './cardStyles.scss'

// eslint-disable-next-line react/prop-types
const Card = ({ id, nombre, descripcion, foto, horario, capacidad }) => {

  return (
    <div className='card'>
        <h2 className='card_title'>{nombre}</h2>
        <img className='card_img' src={foto} alt={nombre} />
        <p>{descripcion}</p>
        <span>Horario: {horario}</span>
        <br />
        <span>Capacidad: {capacidad}</span>
        <br />
        <Link to={`/juegos/${id}`}>
          <button className='card_sell_btn'>vender</button>
        </Link>
    </div>
  )
}

export default Card