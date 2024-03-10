import React from 'react';
import { useState, useEffect } from 'react';


const TotalBebidas = ({ bebidasState, indice, arregloCu, elementos }) => {
 const [totalBebidasTodas, setTotalBebidasTodas] = useState(0);
 const [totalBebidasCu, setTotalBebidaCu] = useState(0);

 useEffect(() => {

  // Ejecutar alguna lógica cuando los elementos cambian
  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
  const totalAsistentes = indice.reduce( (acc, elem) => acc = parseInt(elem.totalIndex), 0 ); // quitando el + y dejando el = el contador de totalindex empieza en 1
  const totalBebidasCu1 = totalBebidas / totalAsistentes;
  
  setTotalBebidasTodas(totalBebidas);
  setTotalBebidaCu(totalBebidasCu1); // tolocalstring para unidades de miles

  if (totalBebidasCu) { // para que solo se ejecute el useefect cuando totalbebidacu tenga datos
    arregloCu({totalBebidasCu});// funcion de App.js para almacenar estos datos en el estado cu
  }
  
  
}, [bebidasState, totalBebidasCu, indice]); // aca actualiza si se incluyen otros comensales despues de a rato

  
     return ( 
      
       <>
       <h2 className='yellow' >Total general en bebidas: $ {totalBebidasTodas}</h2>
       <h2 className='yellow' >Cada uno paga por bebidas: ${totalBebidasCu}</h2>
       </>
        ); 
};

export default TotalBebidas;


