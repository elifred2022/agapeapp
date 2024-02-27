

import React from 'react';
import { useState, useEffect } from 'react';



const Calculos = ({ bebidasState, elementos, arregloInformes }) => {

  const [totalBebidaCu, setTotalBebidaCu] = useState('');
  
  useEffect(() => {
    
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', elementos);
  }, [elementos]);

  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
  
  const totalAsistentes = elementos.reduce( (acc, elem) => acc = parseInt(elem.count), 0 );

 const totalBebidasCu = totalBebidas / totalAsistentes;

 arregloInformes({totalBebidaCu});
 setTotalBebidaCu(totalBebidasCu);

  return  <h2 className='yellow'>Paga cada uno por bebidas: {totalBebidasCu}</h2>
         
  ;
};

export default Calculos;