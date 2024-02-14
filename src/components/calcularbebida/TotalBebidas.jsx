// src/components/Total.js
import React from 'react';
import { useState } from 'react';


const TotalBebidas = ({ agregarBebida, bebidasState, elementos }) => {
  const [totalBebidaCu, setTotalBebidaCu] = useState('');

  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
    
 const totalAsistentes = elementos.reduce( (acc, elem) => acc = parseInt(elem.newCount), 0 );

 const totalBebidasCu = totalBebidas / totalAsistentes;
 
 const handleOnChange = (e) => {
  e.preventDefault();
  agregarBebida({ totalBebidaCu });
  setTotalBebidaCu('');
  

  
};

 

    return ( 
       <>
       <div onChange={handleOnChange}>
          <h2 className='yellow' >Total bebidas: $ {totalBebidas}</h2>
            <h2 className='yellow'  >Total bebidas por asistente: $ {totalBebidasCu}</h2>
       </div>
             
       
       </>
      ); 
};

export default TotalBebidas;
