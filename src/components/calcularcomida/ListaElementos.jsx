// src/components/ListaElementos.js
import React, { useEffect } from 'react';

const ListaElementos = ({ elementos, eliminarElemento, agregarElemento }) => {
 

  useEffect(() => {
    
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', elementos);
   
  }, [elementos]);

  return (
    <ul>
      {elementos.map((elem, index) => (
        <li key={index}>
        {`${index + 1}. - ${elem.nombre} - ${elem.comida} - $ ${elem.valorComida}`}
          <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaElementos;
