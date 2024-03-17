import React, { useState, useEffect } from 'react';


const InformeFinal = ({ almacenPorcentEfectivo, totalConsumo, agregarElemento, elementos, cu, almacenTotalComidas, arregloTotalConsumo, bebidasState, indice, arregloAlmacentotalComidas }) => {
  const [totalConsumoGral, setTotalConsumoGral] = useState(0);

  const totalBebidasCu = cu.reduce((acc, elem) => acc = parseInt(elem.totalBebidasCu), 0);
  const totalComidasGral1 = almacenTotalComidas.reduce( (acc, elem) => acc = parseInt(elem.totalComidas), 0 );
  const totalBebidasGral1 = cu.reduce( (acc, elem) => acc = parseInt(elem.totalBebidasTodas), 0 );
  const traerPorcentajeEfectivo = almacenPorcentEfectivo.reduce( (acc, elem) => acc = parseInt(elem.descuento), 0 );
 
  useEffect(() => {

    const consumo = totalComidasGral1 + totalBebidasGral1;
    //const totalComidas = elementos.reduce((acc, elem) => acc + parseInt(elem.valorComida), 0);
    setTotalConsumoGral(consumo);
    
    arregloTotalConsumo({ totalConsumoGral });

    //arregloAlmacentotalComidas({ totalConsumoGral });
    
  }, [almacenTotalComidas, cu]);
  
  return (

    <>
      <table className='styled-table'>
        <thead>
          <tr>
             <th>Nº</th>
            <th>Nombre</th>
            <th>Importe plato</th>
            <th>Importe bebidas</th>
            <th>Importe si paga en debito</th>
            <th>Importe si paga en efectivo</th>
            
          </tr>
        </thead>

        <tbody>
            {elementos.map((elem, index) => (
                <tr key={index} >
                  <td >{`${index + 1}`}.-</td> 
                  <td >{`${elem.nombre}`}</td>
                  <td>$ {`${elem.valorComidaConPorcentaje}`}</td>
                  <td>$ {`${totalBebidasCu}`}</td>
                  <td className='formulario'>$ {`${parseInt(elem.valorComidaConPorcentaje) + parseInt(totalBebidasCu)}`} 
                  
                    <input type="checkbox" />
                     
                  </td>
                  <td>$ 
                    {`${ (parseInt(elem.valorComidaConPorcentaje) + parseInt(totalBebidasCu)) - (parseInt(elem.valorComidaConPorcentaje) + parseInt(totalBebidasCu)) * parseInt(traerPorcentajeEfectivo)  / 100}`} 
                    <input type="checkbox" />
                      
                    </td> 
                  
                </tr>
              ))}
            </tbody>
       </table>
       {/*<h2 className='yellow'>Total consumo: $ {`${totalComidasGral1 + totalBebidasGral1}`} </h2>*/}
       <h2 className='yellow'>Total consumo: $ {totalConsumoGral.toLocaleString({ minimumFractionDigits: 0, maximumFractionDigits: 0 })} </h2>
    </>

  
  );
};

export default InformeFinal;

/*
<label className='checkbox-container'>
                    <input type="checkbox" />
                      <span className='checkmark'></span>
                  </label>
                  */