import React from 'react'
import './HeaderRegis.css'
import Logo from '../../assets/Nutretec blanco.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'><img src={Logo} alt='' className='logo'/></Link>
        
    </div>
  )
}

export default Header