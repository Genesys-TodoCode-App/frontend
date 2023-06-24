import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import './navbarStyles.scss';

// eslint-disable-next-line react/prop-types
const Navbar = ({ type }) => {

    const navigate = useNavigate()

    const informes = [
        {
            id: 1,
            label: "Ventas en mes y año", 
            url: "/ventas-mes-año"
        },
        {
            id: 2,
            label: "Ventas en la fecha", 
            url: ""
        },
        {
            id: 3,
            label: "Juego con mas entradas vendidas", 
            url: ""
        },
        {
            id: 4,
            label: "Juego con mas entradas vendidas hasta hoy", 
            url: ""
        },
        {
            id: 5,
            label: "Entradas vendidas por juego y fecha", 
            url: ""
        },
        {
            id: 6,
            label: "Entradas vendidas en fecha", 
            url: ""
        },
        {
            id: 7,
            label: "Empleados con juegos asignados", 
            url: ""
        },
        {
            id: 8,
            label: "Comprador con mas entradas pagadas", 
            url: ""
        }
    ]

    const handleSelectChange = (event) => {
        const selectedUrl = event.target.value;
        console.log(selectedUrl);
        if (selectedUrl) {
            navigate(selectedUrl);
        }
    };

    if(type == 'empleadoAdministrativo') {
        return (
            <nav className='navbar'>
                <Link to='/add-buyer' className='nav_link'>Agregar Comprador</Link>
                <Link to='/ventas' className='nav_link'>Ventas</Link>
                <Link to='/empleados' className='nav_link'>Empleados</Link>
                <select className="nav_link_select" name="informes" onChange={handleSelectChange}>
                    <option value="default" className="nav_link_option">Informes:</option>
                    {informes.map(i => (
                        <option className="nav_link_option" key={i.id} value={i.url}>
                            {i.label}
                        </option>
                    ))}
                </select>
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