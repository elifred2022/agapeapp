// src/components/Total.js
import React from 'react';
import { useState, useEffect } from 'react';


const TotalBebidas = ({ bebidasState, indice, arregloCu, /*arregloInformes*/ }) => {
 const [totalBebidasTodas, setTotalBebidasTodas] = useState(0);
 const [totalBebidasCu, setTotalBebidaCu] = useState(0);

 useEffect(() => {
  // Ejecutar alguna lógica cuando los elementos cambian
  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
  const totalAsistentes = indice.reduce( (acc, elem) => acc = parseInt(elem.totalIndex), 0 ); // quitando el + y dejando el = el contador de totalindex empieza en 1
  const totalBebidasCu1 = totalBebidas / totalAsistentes;
  //console.log('Elementos actualizados:', bebidasState);
  setTotalBebidasTodas(totalBebidas.toFixed(2));
  setTotalBebidaCu(totalBebidasCu1.toFixed(2)); // tofiexed coloca decimales
  
  arregloCu({totalBebidasCu}); // funcion de App.js para almacenar estos datos en el estado del informe final
}, [bebidasState]);

  
     return ( 
      
       <>
       <h2 className='yellow' >Total general en bebidas consumidas: $ {totalBebidasTodas}</h2>
       <h2 className='yellow' >Cada uno paga por bebidas: ${totalBebidasCu}</h2>
       </>
        ); 
};

export default TotalBebidas;




/*

            <h2 className='yellow' >Total bebidas: $ {totalBebidas}</h2>
            <h2 className='yellow'  >Total bebidas por asistente: $ {totalBebidasCu}</h2>
 
 const handleOnChange = (e) => {
 // e.preventDefault();
  arregloInformes({totalBebidaCu});
    
  
  setTotalBebidaCu(totalBebidasCu);
  }; 

  */