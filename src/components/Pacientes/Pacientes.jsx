import './Pacientes.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    //const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [cuestionariosData, setCuestionariosData] = useState(null);
    const [isShown, setIsShown] = useState(false);

    const handleClick = (e) => {
        setIsShown(current => !current);
      };

    const onSubmitLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/cuestionarioByUserId', formData)
            .then((response) => {
                const pacienteInfo = response.data;
                    localStorage.setItem('pacienteInfo', JSON.stringify(pacienteInfo))
                    console.log('pacienteInfo', pacienteInfo)
                //setSuccess(true);
                setCuestionariosData(response.data);
                console.log(cuestionariosData);
                const dataCuestionarios = response.data;
                console.log(dataCuestionarios);
                console.log(dataCuestionarios);

                // if (response.data.tipoUsuario === "paciente") {
                    
                //     setSuccess(true);
                //     setError(null);
                // } else if (response.data.tipoUsuario === "medico") {
                    
                //     setSuccess('medico');
                //     setError(null);
                // } else if (response.data === "Contraseña incorrecta") {
                //     setSuccess(false);
                //     setError("Contraseña incorrecta");
                // } else if (response.data === "El usuario no existe") {
                //     setSuccess(false);
                //     setError("El usuario no existe");
                // }
            })
            .catch((error) => {
                console.error(error);
                //setSuccess(false);
                setError("Ocurrió un error al iniciar sesión");
            });

        
    };

    return (
        <>
                <section>
                    <h1 className='text'>Busca cuestionarios de tus pacientes</h1>
                    <form onSubmit={onSubmitLogin}>
                        <label htmlFor="username" className='text'>Ingresa el email del paciente:</label>
                        <div className="inputContainer">
                            <input
                                onChange={(inputData) => {
                                    setFormData({
                                        ...formData,
                                        email: inputData.target.value
                                    });
                                }}
                                type="text"
                                name=""
                                id="email"
                            />
                        </div>
                        <button type="submit" onClick={handleClick}>Buscar</button>
                        {isShown && (
                            <button  onClick={() => navigate('/cuestionarios')}>Ver resultados</button>
                        )}
                        {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error si existe */}
                    </form>
                </section>
        </>
    )
}

export default Login

