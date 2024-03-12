import React, { useState, useEffect } from 'react';


const InformeFinal = ({ elementos, cu, almacenTotalComidas,  arregloAlmacentotalComidas }) => {
  const [totalConsumoGral, setTotalConsumoGral] = useState(0);

  const totalBebidasCu = cu.reduce((acc, elem) => acc = parseInt(elem.totalBebidasCu), 0);
  const totalComidasGral1 = almacenTotalComidas.reduce( (acc, elem) => acc = parseInt(elem.totalComidas), 0 );
  const totalBebidasGral1 = cu.reduce( (acc, elem) => acc = parseInt(elem.totalBebidasTodas), 0 );
  //const totalConsumo = totalComidasGral1 + totalBebidasGral1;

  
  return (

    <>
      <table className='styled-table'>
        <thead>
          <tr>
             <th>Nº</th>
            <th>Nombre</th>
            <th>Importe total plato</th>
            <th>Importe por bebidas</th>
            <th>Total a pagar</th>
            <th>Pago?</th>
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
                  <label className='checkbox-container'>
                    <input type="checkbox" />
                      <span className='checkmark'></span>
                  </label>
                </tr>
              ))}
            </tbody>
       </table>
       <h2 className='yellow'>Total consumo: $ {`${totalComidasGral1 + totalBebidasGral1}`} </h2>
    </>

  
  );
};

export default InformeFinal;