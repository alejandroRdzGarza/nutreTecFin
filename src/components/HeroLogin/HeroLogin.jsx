import React from 'react'
import './HeroLogin.css'
import HeaderRegis from '../HeaderRegis/HeaderRegis'
import Login from '../Login/Login'
import regisback from '../../assets/regisback.png'
import hero_image_back from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'

const HeroLogin = () => {
    const transition = {type: 'spring', duration: 3}
  return (
    <div className="hero">
        <div className="left-h">
            <HeaderRegis/>

            <div className="herologin">
                <Login/>
            </div>

        </div>
        <div className="right-h">

            <img src={regisback} alt="" className='doctor-image' />
            <motion.img 
            initial={{right:'5rem'}}
            whileInView={{right:'11rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />

        </div>
    </div>
  )
}

export default HeroLogin