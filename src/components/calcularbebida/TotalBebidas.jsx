import React from 'react';
import { useState, useEffect } from 'react';


const TotalBebidas = ({ bebidasState, indice, arregloCu, elementos }) => {
 const [totalBebidasTodas, setTotalBebidasTodas] = useState(0);
 const [totalBebidasCu, setTotalBebidaCu] = useState(0);

 useEffect(() => {

  // Ejecutar alguna lógica cuando los elementos cambian
  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
  const totalAsistentes = indice.reduce( (acc, elem) => acc = parseInt(elem.totalIndex), 0 ); // quitando el + y dejando el = el contador de totalindex empieza en 1
  const totalBebidasCu1 = totalAsistentes > 0 ? totalBebidas / totalAsistentes : 0; // asi co este codigo se evita inicializar en null totalAsistentes > 0 ? totalBebidas / totalAsistentes : 0;
  
  setTotalBebidasTodas(totalBebidas);
  setTotalBebidaCu(totalBebidasCu1); // tolocalstring para unidades de miles
  arregloCu({totalBebidasCu, totalBebidasTodas});
  
  
  
}, [bebidasState, totalBebidasCu, indice]); // aca actualiza si se incluyen otros comensales despues de a rato

  
     return ( 
      
       <>
       <h2 className='yellow' >Total general en bebidas: $ {totalBebidasTodas.toLocaleString()}</h2>
       <h2 className='yellow' >Cada persona paga por bebidas: $ {totalBebidasCu.toLocaleString()}</h2>
       </>
        ); 
};

export default TotalBebidas;


