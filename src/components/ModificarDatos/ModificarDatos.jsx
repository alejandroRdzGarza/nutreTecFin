import React, { useState } from 'react';
import './ModificarDatos.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ModificarDatos = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: JSON.parse(localStorage.getItem('user')).nombre,
        edad: JSON.parse(localStorage.getItem('user')).edad,
        telefono: JSON.parse(localStorage.getItem('user')).telefono,
        email: JSON.parse(localStorage.getItem('user')).email,
        fechaNacimiento: JSON.parse(localStorage.getItem('user')).fechaNacimiento,
        contrasena: JSON.parse(localStorage.getItem('user')).contrasena,
        tipoUsuario: JSON.parse(localStorage.getItem('user')).tipoUsuario,

    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    let idUsuario = JSON.parse(localStorage.getItem('user')).IDusuario;

    const handleClick = (e) => {
        if(formData.tipoUsuario === "paciente") {
            navigate('/Profile');
        }else{
            navigate('/profile_arnold');
        }
      };

    const onSubmitRegister = (e) => {
        e.preventDefault();
        const currentDate = getCurrentDate(); // Obtener la fecha actual
        const updatedFormData = {
            ...formData,
            fechaDeRegistro: currentDate, // Agregar la fecha actual al formData
        };
        console.log(updatedFormData);
        if(updatedFormData.tipoUsuario === undefined) {
            updatedFormData.tipoUsuario = "paciente";
        }

        axios.put('http://localhost:8080/api/usuario/'+idUsuario, updatedFormData)
        .then((response) => {
            const user = response.data;
                localStorage.setItem('jwt', user.auth_token)
                localStorage.setItem('user', JSON.stringify(user))
                console.log('user', user)
            console.log(response.data);
            setSuccess(true);
            setError(null);
        })
        .catch((error) => {
            setError(error.response.data);
            console.error(error);
        });
    };

    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const handleTipoUsuarioChange = (inputData) => {
        const isChecked = inputData.target.checked;
        setFormData({
            ...formData,
            tipoUsuario: isChecked ? "medico" : "paciente"
        });
    };

    return (
        <div className='SeccionRegistro'>
            {success ? (
                <section>
                    <h1><span className='text'>Haz sido registrado!</span></h1>
                    <p>
                        <Link to='/login'>INICIA SESION</Link>
                    </p>
                </section>
            ) : (
                <section>
                    <h1><span className='text'>Modificar Datos</span></h1>
                    <h4 className='text'>Los campos que dejes en blanco se quedaran con sus valores anteriores</h4>
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
                        <input className='botonfechanace' onChange={(inputData) => { setFormData({
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
                        <input onChange={handleTipoUsuarioChange} type="checkbox" name="" id=""  placeholder='paciente'/>
                        </div>
                        <button onClick={handleClick}>Registrarse</button>
                        {error && <p className="errmsg">{error} </p>}
                    </form>
                    
                </section>
            )}
        </div>
    )
}

export default ModificarDatos