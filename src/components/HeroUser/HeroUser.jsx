import React from 'react'
import './HeroUser.css'
import Header from '../Header/Header'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calorias from '../../assets/calorias.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
import {useNavigate} from 'react-router-dom'
import Hombre2 from '../../assets/Hombre2.png'

const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const navigate = useNavigate()
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <motion.div
                initial={{left:'238px'}}
                whileInView={{left:'8px'}}
                transition={transition}
                ></motion.div>
                <span>La mejor Pagina Web de Nutrición</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Diviértete</span>
                </div>
                <div>
                    <span>Nutriéndote</span>
                </div>
            </div>

            <div className="figures">
                <div>
                    <span><NumberCounter end={150} start={100} delay='4' preFix='+'/></span>
                    <span>Medicos expertos</span>
                </div>
                <div>
                    <span><NumberCounter end={500} start={350} delay='4' preFix='+'/></span>
                    <span>Dietas diferentes</span>
                </div>
                <div>
                    <span><NumberCounter end={100} start={50} delay='4' preFix='+'/></span>
                    <span>Rutinas de ejercicio</span>
                </div>
            </div>

        </div>
        <div className="right-h">
            <button className='btn' onClick={() => navigate('/profile')}>Perfil</button>

            <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>

            <img src={Hombre2} alt="" className='hero-image_user' />
            <motion.img 
            initial={{right:'5rem'}}
            whileInView={{right:'11rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero-image-back' />

            <motion.div 
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}
            className="calories">
                <img src={Calorias} alt="" />
                <div>
                <span>Calorias quemadas</span>
                <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero