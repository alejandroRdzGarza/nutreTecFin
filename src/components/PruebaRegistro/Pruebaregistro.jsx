import React, { useState } from 'react';
import './Pruebaregistro.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);

    const onSubmitRegister = (e) => {
        e.preventDefault();
        const currentDate = getCurrentDate(); // Obtener la fecha actual
        const updatedFormData = {
            ...formData,
            fechaDeRegistro: currentDate, // Agregar la fecha actual al formData
        };
        console.log(updatedFormData);

        axios.post('http://localhost:8080/api/usuario', updatedFormData)
        .then((response) => {
            console.log(response.data);
            setSuccess(true);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    // Función para obtener la fecha actual en el formato "YYYY-MM-DD"
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <>
            {success ? (
                <section>
                    <h1><span className='text'>Haz sido registrado!</span></h1>
                    <p>
                        <Link to='/login'>INICIA SESION</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1><span className='text'>Registro</span></h1>
                    <form onSubmit={onSubmitRegister}>
                        
                        <label htmlFor="username">
                            <span className='text'>Nombre Completo:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                nombre: inputData.target.value
                            })  }} type="text" name="" id="" />

                        <label htmlFor="username">
                            <span className='text'>Edad:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                edad: inputData.target.value
                            })  }} type="text" name="" id="" />

                        <label htmlFor="username">
                            <span className='text'>Telefono:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                telefono: inputData.target.value
                            })  }} type="text" name="" id="" />

                        <label htmlFor="username">
                            <span className='text'>Correo electronico:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                email: inputData.target.value
                            })  }} type="text" name="" id="" />
                        
                        <label htmlFor="username">
                            <span className='text'>Fecha de Nacimiento:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                fechaNacimiento: inputData.target.value
                            })  }} type="date" name="" id="" />

                        <label htmlFor="password">
                            <span className='text'>Contraseña:</span>
                        </label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                contrasena: inputData.target.value
                            })  }} type="password" name="" id="" />

                        <div className='nutrici'>
                        <label>Nutricionista?</label>
                        <input onChange={(inputData) => { setFormData({
                                ...formData,
                                tipoUsuario: inputData.target.checked ? "nutricionista" : "",
                            }); }} type="checkbox" name="" id=""
                        />
                        </div>
                        <button>Registrarse</button>
                    </form>
                    <p>
                        <span className='text'>Ya estas registrado?</span> <br />
                        <span className="line">
                            <Link to='/login'>Iniciar sesion</Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Register