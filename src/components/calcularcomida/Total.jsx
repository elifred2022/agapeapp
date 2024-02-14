// src/components/Total.js
import React from 'react';

const TotalComidas = ({ elementos }) => {
  const totalComidas = elementos.reduce((acc, elem) => acc + parseInt(elem.valorComida), 0);

  return <h2 className='yellow' >Total comidas: $ {totalComidas}</h2>;
};

export default TotalComidas;
