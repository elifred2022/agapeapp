// src/components/ListaElementos.js
import React, { useEffect } from 'react';



const InformeFinal = ({ informes, elementos, bebidasState}) => {

  
  useEffect(() => {
    
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', informes);
    
  }, [informes, elementos, bebidasState]);



  return (
    <>
    <h2>Informe</h2>
    
    </>
     
     
    );
};

export default InformeFinal;


/*

<ul>
      {informes.map((elem, index) => (
        <li key={index}>
        {`${index + 1}. -    `}
          
        </li>
      ))}
    </ul>

// src/components/ListaElementos.js
import React, { useEffect } from 'react';


const InformeFinal = ({ elementos, bebidasState }) => {
 

  useEffect(() => {
    
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', elementos);
    console.log('Elementos actualizados:', bebidasState);
  }, [elementos, bebidasState]);



  return (
    <ul>
      {elementos.map((elem, index, calculos) => (
        <li key={index}>
        {`${index + 1}. - ${elem.nombre} - ${elem.comida} - $ ${elem.valorComida} - ${elem.valorUnitBebida}`}
        
        </li>
      ))}
      
    </ul>
  );
};

export default InformeFinal;


<ul>
      {informes.map((elem, index, calculos) => (
        <li key={index}>
        {`${index + 1}. - ${elem.nombre} - `}
        
        </li>
      ))}
      
    </ul>
      
    </ul>


*/
