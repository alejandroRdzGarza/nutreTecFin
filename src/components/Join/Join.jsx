import React from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

export const Join = () => {
    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5wxms89', 'template_ez03mdf', form.current, 'lz9l4irQJZ_IOq1Qg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>¿Estas listo</span>
                <span>para cuidar</span>
            </div>
            <div>
                <span>tu salud</span>
                <span className='stroke-text'>con nosotros?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Ingresa tu Correo Electronico' />
                <button className='btn btn-j'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Join