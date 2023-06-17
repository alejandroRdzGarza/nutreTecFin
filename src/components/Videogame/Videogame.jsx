import React from 'react'
import './Videogame.css'
import Bacteria from '../../assets/BacteriaRender.png'
import Nutriman from '../../assets/NutrimanRender.png'
import Virus from '../../assets/VirusRender.png'

const PNG_FILE_URL = 'http://localhost:3000/Nutretec-Gl%C3%B3buloBlanco.zip'

const Videogame = () => {

  const downloadVideogameURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <div className='SeccionVideojuego'>
      <img className='bacteria' src={Bacteria} alt='Bacteria' />
      <img className='nutriman' src={Nutriman} alt='Nutriman' />
      <img className='virus' src={Virus} alt='Virus' />
      <button className='descarga_juego' onClick={() => {downloadVideogameURL(PNG_FILE_URL)}}>
        Descargar Videojuego
      </button>
    </div>
  )
}

export default Videogame