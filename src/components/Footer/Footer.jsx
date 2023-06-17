import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/Nutretec blanco.png'

export const Footer = () => {
  return (
    <div className="Footer-all">
        <hr/>
        <div className="footer">
            <div className="social">
              <a href="https://github.com/Jose-Oliva-Ing/NutreTec.git" target="_blank" rel="noreferrer">
                <img src={Github} alt="" />
              </a>
              <a href="https://www.instagram.com/schwarzenegger" target="_blank" rel="noreferrer">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/arnold-schwarzenegger/" target="_blank" rel="noreferrer">
                <img src={Linkedin} alt="" />
              </a>
            </div>
            <div className="logo-f">
                <img className='logito_footer' src={Logo} alt="" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer