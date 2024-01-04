// src/components/Total.js
import React from 'react';

const Total = ({ elementos }) => {
  const total = elementos.reduce((acc, elem) => acc + parseInt(elem.valorComida), 0);

  return <p>Total: {total}</p>;
};

export default Total;
