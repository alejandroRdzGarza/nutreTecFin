import React from 'react'
import './Header.css'
import Logo from '../../assets/Nutretec blanco.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/index_user'><img src={Logo} alt='' className='logo'/></Link>
        <ul className='header-menu'>
            <Link to='/index_user'>Inicio</Link>
            <Link to='/rutina'>Rutinas</Link>
            <Link to='/dieta'>Dietas</Link>
            <Link to='/survey'>Cuestionario</Link>
        </ul>
    </div>
  )
}

export default Header