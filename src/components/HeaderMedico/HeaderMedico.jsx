import React from 'react'
import './HeaderMedico.css'
import Logo from '../../assets/Nutretec blanco.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/index_medico'><img src={Logo} alt='' className='logo'/></Link>
        <ul className='header-menu'>
            <Link to='/index_medico'>Inicio</Link>
        </ul>
    </div>
  )
}

export default Header