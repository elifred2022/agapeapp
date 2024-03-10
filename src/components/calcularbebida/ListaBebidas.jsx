import React, { useEffect } from 'react';

const ListaBebidas = ({ bebidasState, eliminarBebida }) => {
  useEffect(() => {
    // Ejecutar alguna lógica cuando los elementos cambian
   console.log('Elementos actualizados:', bebidasState);
  }, [bebidasState]);

  return ( 
    <ul>
      {bebidasState.map((elem, index) => (
        <li key={index}>
           {`${elem.bebida} -> ${elem.cantidadBebida} * ${elem.valorUnitBebida} = ${elem.totalBebida} `}
          
            
          <button onClick={() => eliminarBebida(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaBebidas;


