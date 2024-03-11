import React from 'react';
import TotalComidas from './calcularcomida/Total';

const InformeFinal = ({ elementos, cu, almacenTotalComidas }) => {
  
  const totalBebidasCu = cu.reduce((acc, elem) => acc = parseInt(elem.totalBebidasCu), 0);
  const totalComidasGral1 = almacenTotalComidas.reduce( (acc, elem) => acc = parseInt(elem.totalComidas), 0 );

  return (

    <>
      <table className='styled-table'>
        <thead>
          <tr>
             <th>Nº</th>
            <th>Nombre</th>
            <th>Importe total plato</th>
            <th>Importe por bebidas</th>
            <th>total a pagar</th>
            
          </tr>
        </thead>

        <tbody>
            {elementos.map((elem, index) => (
                <tr key={index} >
                  <td >{`${index + 1}`}.-</td> 
                  <td>{`${elem.nombre}`}</td>
                  <td>{`${elem.valorComidaConPorcentaje}`}</td>
                  <td> $ {`${totalBebidasCu}`}</td>
                  <td>{`${parseInt(elem.valorComidaConPorcentaje) + parseInt(totalBebidasCu)}`} </td> 
                    
                </tr>
              ))}
            </tbody>
       </table>
       <h2>Total consumo de hoy: $ {`${totalComidasGral1}`} </h2>
    </>

  
  );
};

export default InformeFinal;