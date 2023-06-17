import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Prueba = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/usuarios');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Prueba;