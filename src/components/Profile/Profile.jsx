import React, { useEffect, useState } from 'react';
import './Profile.css'
import profile_image from '../../assets/user.jpg'
import medalla from '../../assets/Medalla.jpg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate()
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [, setError] = useState(null);
    let userDetails = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/estadisticas');
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
            'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day+1} de ${month} del ${year}`;
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/usuarios');
            setData2(response.data);
        } catch (error) {
            setError(error.message);
        }
        };

        fetchData();
    }, []);

    return (
        <div className='SeccionProfile'>
            <div>
                <div>
                    <img className='foto_profile' src={profile_image} alt=''/>
                </div>
                <div>
                    <img className='foto_medalla' src={medalla} alt=''/>
                    <span className='bandera_medalla'>Medalla</span>
                </div>
            </div>
            <div>
                {data2 && (
                    <div className='personal_profile'>
                        <div className='bandera_profile'>
                            <span>Datos personales</span>
                        </div>
                        <div className='cosas_nombre'>
                            <span>Nombre del usuario</span>
                            <div className='rectangulo_nombre'>{userDetails.nombre}</div>
                        </div>
                        <div className='line_perso'>
                        <div className='fechita'>
                            <span>Fecha de nacimiento</span>
                            <div className='rectangulo_fecha'>{userDetails && formatDate(userDetails.fechaNacimiento)}</div>
                        </div>
                            <div className='cel'>
                                <span>Telefono</span>
                                <div className='rectangulo_telefono'>{userDetails.telefono}</div>
                            </div>
                            <div className='correito'>
                                <span>Correo electronico</span>
                                <div className='rectangulo_correo'>{userDetails.email}</div>
                            </div>
                        </div>
                    </div>
                )}
                {data && (
                    <div className='estadisticas_profile'>
                        <div className='bandera_estadisticas'>
                            <span>Estadisticas</span>
                        </div>
                        <div className='line_1'>
                            <div className='trofeitos'>
                                <span>Trofeos</span>
                                <div className='rectangulo_trofeos'>{data[0].trofeos}</div>
                            </div>
                            <div className='carre_comple'>
                                <span>Carreras completadas</span>
                                <div className='rectangulo_completas'>{data[0].juegosCompletados}</div>
                            </div>
                            <div className='carre_incom'>
                                <span>Carreras frustadas</span>
                                <div className='rectangulo_frustadas'>{data[0].juegosFrustrados}</div>
                            </div>
                        </div>
                        <div className='line_2'>
                            <div className='efectividad'>
                                <span>Efectividad</span>
                                <div className='rectangulo_efectividad'>{data[0].efectividad}%</div>
                            </div>
                            <div className='puntaje'>
                                <span>Mejor puntaje</span>
                                <div className='rectangulo_puntaje'>{data[0].mejorPuntaje}</div>
                            </div>
                            <div className='racha'>
                                <span>Racha de dias</span>
                                <div className='rectangulo_racha'>{data[0].rachaDias}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <button className='Cerrar_user' onClick={() => navigate('/')}>Cerrar Sesion</button>
        </div>
    )
}

export default Profile