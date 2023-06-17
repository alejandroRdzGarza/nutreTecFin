import React, { useEffect, useState } from 'react';
import './Rutina.css'
import axios from 'axios';

const Rutina = () => {

    const [data, setData] = useState(null);
    const [, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/ejercicios');
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }
        };

        fetchData();
    }, []);

    return (
        <div className='SeccionRutina'>
            <table>
                <tr>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                    <th>Domingo</th>
                </tr>
                {data && (
                    <tr>
                        <td>
                            <div>{data[0].nombre}</div>
                            <div>Musculo: {data[0].musculo}</div>
                            <div>Sets: {data[0].sets}</div>
                            <div>Repeticiones: {data[0].repeticiones}</div>
                            <div>Tiempo: {data[0].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[1].nombre}</div>
                            <div>Musculo: {data[1].musculo}</div>
                            <div>Sets: {data[1].sets}</div>
                            <div>Repeticiones: {data[1].repeticiones}</div>
                            <div>Tiempo: {data[1].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[2].nombre}</div>
                            <div>Musculo: {data[2].musculo}</div>
                            <div>Sets: {data[2].sets}</div>
                            <div>Repeticiones: {data[2].repeticiones}</div>
                            <div>Tiempo: {data[2].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[3].nombre}</div>
                            <div>Musculo: {data[3].musculo}</div>
                            <div>Sets: {data[3].sets}</div>
                            <div>Repeticiones: {data[3].repeticiones}</div>
                            <div>Tiempo: {data[3].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[4].nombre}</div>
                            <div>Musculo: {data[4].musculo}</div>
                            <div>Sets: {data[4].sets}</div>
                            <div>Repeticiones: {data[4].repeticiones}</div>
                            <div>Tiempo: {data[4].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[5].nombre}</div>
                            <div>Musculo: {data[5].musculo}</div>
                            <div>Sets: {data[5].sets}</div>
                            <div>Repeticiones: {data[5].repeticiones}</div>
                            <div>Tiempo: {data[5].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[6].nombre}</div>
                            <div>Musculo: {data[6].musculo}</div>
                            <div>Sets: {data[6].sets}</div>
                            <div>Repeticiones: {data[6].repeticiones}</div>
                            <div>Tiempo: {data[6].tiempo} seg</div>
                        </td>
                    </tr>
                )}
                {data && (
                    <tr>
                        <td>
                            <div>{data[7].nombre}</div>
                            <div>Musculo: {data[7].musculo}</div>
                            <div>Sets: {data[7].sets}</div>
                            <div>Repeticiones: {data[7].repeticiones}</div>
                            <div>Tiempo: {data[7].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[8].nombre}</div>
                            <div>Musculo: {data[8].musculo}</div>
                            <div>Sets: {data[8].sets}</div>
                            <div>Repeticiones: {data[8].repeticiones}</div>
                            <div>Tiempo: {data[8].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[9].nombre}</div>
                            <div>Musculo: {data[9].musculo}</div>
                            <div>Sets: {data[9].sets}</div>
                            <div>Repeticiones: {data[9].repeticiones}</div>
                            <div>Tiempo: {data[9].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[10].nombre}</div>
                            <div>Musculo: {data[10].musculo}</div>
                            <div>Sets: {data[10].sets}</div>
                            <div>Repeticiones: {data[10].repeticiones}</div>
                            <div>Tiempo: {data[10].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[11].nombre}</div>
                            <div>Musculo: {data[11].musculo}</div>
                            <div>Sets: {data[11].sets}</div>
                            <div>Repeticiones: {data[11].repeticiones}</div>
                            <div>Tiempo: {data[11].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[12].nombre}</div>
                            <div>Musculo: {data[12].musculo}</div>
                            <div>Sets: {data[12].sets}</div>
                            <div>Repeticiones: {data[12].repeticiones}</div>
                            <div>Tiempo: {data[12].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[13].nombre}</div>
                            <div>Musculo: {data[13].musculo}</div>
                            <div>Sets: {data[13].sets}</div>
                            <div>Repeticiones: {data[13].repeticiones}</div>
                            <div>Tiempo: {data[13].tiempo} seg</div>
                        </td>
                    </tr>
                )}
                {data && (
                    <tr>
                        <td>
                            <div>{data[14].nombre}</div>
                            <div>Musculo: {data[14].musculo}</div>
                            <div>Sets: {data[14].sets}</div>
                            <div>Repeticiones: {data[14].repeticiones}</div>
                            <div>Tiempo: {data[14].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[15].nombre}</div>
                            <div>Musculo: {data[15].musculo}</div>
                            <div>Sets: {data[15].sets}</div>
                            <div>Repeticiones: {data[15].repeticiones}</div>
                            <div>Tiempo: {data[15].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[16].nombre}</div>
                            <div>Musculo: {data[16].musculo}</div>
                            <div>Sets: {data[16].sets}</div>
                            <div>Repeticiones: {data[16].repeticiones}</div>
                            <div>Tiempo: {data[16].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[17].nombre}</div>
                            <div>Musculo: {data[17].musculo}</div>
                            <div>Sets: {data[17].sets}</div>
                            <div>Repeticiones: {data[17].repeticiones}</div>
                            <div>Tiempo: {data[17].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[18].nombre}</div>
                            <div>Musculo: {data[18].musculo}</div>
                            <div>Sets: {data[18].sets}</div>
                            <div>Repeticiones: {data[18].repeticiones}</div>
                            <div>Tiempo: {data[18].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[19].nombre}</div>
                            <div>Musculo: {data[19].musculo}</div>
                            <div>Sets: {data[19].sets}</div>
                            <div>Repeticiones: {data[19].repeticiones}</div>
                            <div>Tiempo: {data[19].tiempo} seg</div>
                        </td>
                        <td>
                            <div>{data[20].nombre}</div>
                            <div>Musculo: {data[20].musculo}</div>
                            <div>Sets: {data[20].sets}</div>
                            <div>Repeticiones: {data[20].repeticiones}</div>
                            <div>Tiempo: {data[20].tiempo} seg</div>
                        </td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default Rutina