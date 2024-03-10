import React, { useEffect, useState } from 'react';

const ListaElementos = ({ elementos, eliminarElemento, arregloIndice }) => {
  
  const [totalIndex, setTotalIndex] = useState(elementos.length);

  useEffect(() => {
     arregloIndice({totalIndex}); // aqui fue q pude pasar  el valor de totalIndex al padre en el estado de indice en App
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
        {`${index + 1}. - ${elem.nombre} - ${elem.comida} - $ ${elem.valorComida} + ${elem.porcentaje}% = ${elem.valorComidaConPorcentaje}`}
          <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
    
    </>
    
  );
};

export default ListaElementos;
