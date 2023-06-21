import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import Juegos from './views/juegos/Juegos.jsx'
import Juego from './views/juego/Juego.jsx'
import AgregarComprador from './views/agregarComprador/agregarComprador.jsx'
import Empleados from './views/empleados/empleados.jsx'
import Empleado from './views/empleado/empleado.jsx'
import Ventas from './views/ventas/Ventas.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/juegos",
    element: <Juegos />,
  },
  {
    path: "/juegos/:id",
    element: <Juego />,
  },
  {
    path: "/add-buyer",
    element: <AgregarComprador />,
  },
  {
    path: "/empleados",
    element: <Empleados />,
  },
  {
    path: "/empleados/:id",
    element: <Empleado />,
  },
  {
    path: "/ventas",
    element: <Ventas />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
