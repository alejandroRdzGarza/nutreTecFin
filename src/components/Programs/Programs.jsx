import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import {Link} from 'react-router-dom'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        <div className="programs-header">
            <span className='stroke-text'>Explora</span>
            <span>tus actividades</span>
            <span className='stroke-text'>diarias</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <Link to={program.link} className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Iniciar Ahora</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Programs