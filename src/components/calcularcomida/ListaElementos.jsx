// src/components/ListaElementos.js
import React, { useEffect, useState } from 'react';
import TotalBebidas from '../calcularbebida/TotalBebidas';


const ListaElementos = ({ elementos, eliminarElemento, agregarElemento }) => {
  
  const [totalIndex, setTotalIndex] = useState(elementos.length);

  const totalIndexAlmacenado = localStorage.getItem('totalIndex');

 

  useEffect(() => {
    localStorage.setItem('totalIndex', totalIndex);
    
  }, [totalIndex]);

  useEffect(() => {
    setTotalIndex(elementos.length);
    
  }, [elementos]);



  useEffect(() => {
    
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', elementos);
   
  }, [elementos]);

  return (
    <>
    <ul>
      {elementos.map((elem, index) => (
        <li key={index}>
        {`${index + 1}. - ${elem.nombre} - ${elem.comida} - $ ${elem.valorComida}`}
          <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
    
    </>
    
  );
};

export default ListaElementos;
