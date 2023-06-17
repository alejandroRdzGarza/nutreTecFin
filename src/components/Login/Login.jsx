import './Login.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const onSubmitLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/usuario/auth', formData)
            .then((response) => {
                const user = response.data;
                    localStorage.setItem('jwt', user.auth_token)
                    localStorage.setItem('user', JSON.stringify(user))
                    console.log('user', user)
                console.log(response.data);
                if (response.data.tipoUsuario === "paciente") {
                    
                    setSuccess(true);
                    setError(null);
                } else if (response.data.tipoUsuario === "medico") {
                    
                    setSuccess('medico');
                    setError(null);
                } else if (response.data === "Contraseña incorrecta") {
                    setSuccess(false);
                    setError("Contraseña incorrecta");
                } else if (response.data === "El usuario no existe") {
                    setSuccess(false);
                    setError("El usuario no existe");
                }
            })
            .catch((error) => {
                console.error(error);
                setSuccess(false);
                setError("Ocurrió un error al iniciar sesión");
            });

        
    };

    return (
        <>
            {success === true ? (
                <section className='bienvenido'>
                    <h1>¡BIENVENIDO! {}</h1>
                    <div className='button-container'>
                        <button className='cuesti' onClick={() => navigate('/profile')}>Ir a tu Perfil</button>
                        <button className='cuesti' onClick={() => navigate('/dieta')}>Ir a tu Dieta</button>
                        <button className='cuesti' onClick={() => navigate('/rutina')}>Ir a tu Rutina</button>
                        <button className='cuesti' onClick={() => navigate('/index_user')}>Ir a la Pagina de Inicio</button>
                    </div>
                </section>
            ) : success === 'medico' ? (
                <section>
                    <h1>¡BIENVENIDO!</h1>
                    <p>
                        <button className='cuesti' onClick={() => navigate('/profile_arnold')}>Ir a tu Perfil</button>
                        <button className='cuesti' onClick={() => navigate('/index_medico')}>Ir a la Página de Inicio</button>
                    </p>
                </section>
            ) : (
                <section>
                    <h1 className='text'>INICIAR SESION</h1>
                    <form onSubmit={onSubmitLogin}>
                        <label htmlFor="username" className='text'>Correo electrónico:</label>
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

                        <label htmlFor="password" className='text'>Contraseña:</label>
                        <div className="inputContainer">
                            <input
                                onChange={(inputData) => {
                                    setFormData({
                                        ...formData,
                                        contrasena: inputData.target.value
                                    });
                                }}
                                type="password"
                                name=""
                                id=""
                            />
                        </div>
                        <button type="submit">Iniciar Sesión</button>
                        {error && <p className="error">{error}</p>} {/* Mostrar mensaje de error si existe */}
                    </form>
                    <p>
                        <span className='text'>No tienes cuenta?</span><br />
                        <span className="line">
                            <Link to='/register'>Crear una cuenta</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login

