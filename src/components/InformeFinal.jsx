import React from 'react';

const InformeFinal = ({ elementos, cu }) => {
  
  const totalBebidasCu = cu.reduce((acc, elem) => acc = parseInt(elem.totalBebidasCu), 0);


  return (
    <div>
      
      <ul>
        {elementos.map((elem, index) => (
          <li key={index}>
            {`${index + 1}.- ${elem.nombre}-> ${elem.valorComidaConPorcentaje} + ${totalBebidasCu} = ${parseInt(elem.valorComidaConPorcentaje) + parseInt(totalBebidasCu)}`}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default InformeFinal;