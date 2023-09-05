import React, { useState, useEffect } from 'react';
import styles from '@/styles/PersonsList.module.css'
import { ApiResponse } from '../../types/apiTypes'; // Asegúrate de que la ruta sea correcta

const PersonsList = () => {
  const [people, setPeople] = useState<ApiResponse['data']>([]);

  useEffect(() => {
    // Realiza la llamada a la API
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((data: ApiResponse) => setPeople(data.data))
      .catch((error) => console.error('Error al obtener la lista de personas', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Listado de Personas</h2>
      <ul className={styles.list}>
        {people.map((person) => (
          <li key={person.id}>
            <img src={person.avatar} alt={`${person.first_name} ${person.last_name}`} />
            <p>Nombre: {`${person.first_name} ${person.last_name}`}</p>
            <p>Email: {person.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonsList;
