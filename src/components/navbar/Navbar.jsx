import { Link } from 'react-router-dom'
import './navbarStyles.scss'

// eslint-disable-next-line react/prop-types
const Navbar = ({ type }) => {

    if(type == 'empleadoAdministrativo') {
        return (
            <nav className='navbar'>
                <Link to='/add-buyer' className='nav_link'>Agregar Comprador</Link>
                <Link to='/ventas' className='nav_link'>Ventas</Link>
                <Link to='/empleados' className='nav_link'>Empleados</Link>
            </nav>
        )
    } else if(type == 'empleadoJuego'){
        return (
            <nav className='navbar'>
                <Link to='/juegos' className='nav_link'>Juegos</Link>
            </nav>
        )
    }


}

export default Navbar