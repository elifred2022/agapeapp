

import React from 'react';
import { useState, useEffect } from 'react';


const Calculos = ({ bebidasState, elementos }) => {
  

  const totalBebidas = bebidasState.reduce((acc, elem) => acc + parseInt(elem.totalBebida), 0);
  
  const totalAsistentes = elementos.reduce( (acc, elem) => acc = parseInt(elem.newCount), 0 );

 const totalBebidasCu = totalBebidas / totalAsistentes;

 

  return  <h2 className='yellow' >Paga cada uno por bebidas: {totalBebidasCu}</h2>
  
      
  ;
};

export default Calculos;