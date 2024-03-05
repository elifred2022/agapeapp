// src/components/ListaElementos.js
import React, { useEffect, useState } from 'react';
import ListaElementos from './calcularcomida/ListaElementos';




const InformeFinal = ({ informes, elementos, bebidasState, cu}) => {
  const [totalBebidasCu2, setTotalBebidaCu2] = useState(0);
  
  useEffect(() => {

    const bebidaCuNum = cu.reduce( (acc, elem) => acc = parseInt(elem.totalBebidasCu), 0 );
    // Ejecutar alguna lógica cuando los elementos cambian
    //console.log('Elementos actualizados:', informes);
    setTotalBebidaCu2(bebidaCuNum);
    
  }, [cu]); 

  

  return (
    <>
    <h2>Informe</h2>
    
    <ul>
      {elementos.map((elem, index) => (
        <li key={index}>
          { `${elem.nombre}.- ${elem.valorComida} +  ` }
        </li>

      ))}

      <h2>{totalBebidasCu2} </h2>

      {cu.map((cu) => (
        <li key={cu}>
          { ` + ${cu.totalBebidasCu} ` }
        </li>

      ))}
    </ul>
    

   
    </>
     
     
    );
};

export default InformeFinal;


/*

 <ul>
      {informes.map((elem, index) => (
        <li key={index}>
        {`${index + 1}. - ${elem.nombre} - ${elem.valorComida} + ${elem.totalBebidasCu}  `}
          
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
