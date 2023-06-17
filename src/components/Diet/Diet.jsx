import React, { useEffect, useState } from 'react';
import './Diet.css'
import axios from 'axios';

const Diet = () => {

    const [data, setData] = useState(null);
    const [, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/alimentos');
            setData(response.data);
        } catch (error) {
            setError(error.message);
        }
        };

        fetchData();
    }, []);

  return (
    <div className='SeccionDieta'>
        <table>
            <tr>
                <th>Tipo de Comida</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miercoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
                <th>Sabado</th>
                <th>Domingo</th>
            </tr>
            {data && (
                <tr>
                    <td>Desayuno</td>
                    <td>
                        <div>{data[3].nombre}</div>
                        <div>{data[3].descripcion}</div>
                        <div>{data[3].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[4].nombre}</div>
                        <div>{data[4].descripcion}</div>
                        <div>{data[4].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[6].nombre}</div>
                        <div>{data[6].descripcion}</div>
                        <div>{data[6].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[10].nombre}</div>
                        <div>{data[10].descripcion}</div>
                        <div>{data[10].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[11].nombre}</div>
                        <div>{data[11].descripcion}</div>
                        <div>{data[11].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[12].nombre}</div>
                        <div>{data[12].descripcion}</div>
                        <div>{data[12].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[10].nombre}</div>
                        <div>{data[10].descripcion}</div>
                        <div>{data[10].gramos}gr</div>
                    </td>
                </tr>
            )}
            {data && (
                <tr>
                    <td>Comida</td>
                    <td>
                        <div>{data[13].nombre}</div>
                        <div>{data[13].descripcion}</div>
                        <div>{data[13].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[14].nombre}</div>
                        <div>{data[14].descripcion}</div>
                        <div>{data[14].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[15].nombre}</div>
                        <div>{data[15].descripcion}</div>
                        <div>{data[15].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[16].nombre}</div>
                        <div>{data[16].descripcion}</div>
                        <div>{data[16].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[17].nombre}</div>
                        <div>{data[17].descripcion}</div>
                        <div>{data[17].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[18].nombre}</div>
                        <div>{data[18].descripcion}</div>
                        <div>{data[18].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[20].nombre}</div>
                        <div>{data[20].descripcion}</div>
                        <div>{data[20].gramos}gr</div>
                    </td>
                </tr>
            )}
            {data && (
                <tr>
                    <td>Cena</td>
                    <td>
                        <div>{data[19].nombre}</div>
                        <div>{data[19].descripcion}</div>
                        <div>{data[19].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[21].nombre}</div>
                        <div>{data[21].descripcion}</div>
                        <div>{data[21].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[22].nombre}</div>
                        <div>{data[22].descripcion}</div>
                        <div>{data[22].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[23].nombre}</div>
                        <div>{data[23].descripcion}</div>
                        <div>{data[23].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[0].nombre}</div>
                        <div>{data[0].descripcion}</div>
                        <div>{data[0].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[1].nombre}</div>
                        <div>{data[1].descripcion}</div>
                        <div>{data[1].gramos}gr</div>
                    </td>
                    <td>
                        <div>{data[2].nombre}</div>
                        <div>{data[2].descripcion}</div>
                        <div>{data[2].gramos}gr</div>
                    </td>
                </tr>
            )}
        </table>
    </div>
  )
}

export default Diet