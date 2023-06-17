import React from 'react'
import './HeroRegister.css'
import HeaderRegis from '../HeaderRegis/HeaderRegis'
import Register from '../Register/Register'
import regisback from '../../assets/regisback.png'
import hero_image_back from '../../assets/hero_image_back.png'
import {motion} from 'framer-motion'

const HR = () => {
    const transition = {type: 'spring', duration: 3}
  return (
    <div className="hero">
        <div className="left-h">
            <HeaderRegis/>

            <div className="heroregister">
                <Register/>
            </div>

        </div>
        <div className="right-h">

            <img src={regisback} alt="" className='doctor-image' />
            <motion.img 
            initial={{right:'5rem'}}
            whileInView={{right:'11rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back-regis' />

        </div>
    </div>
  )
}

export default HR