import React, { useEffect } from 'react';
import { IoMdTrash } from 'react-icons/io';

const ListaBebidas = ({ bebidasState, eliminarBebida }) => {
  useEffect(() => {
    // Ejecutar alguna lógica cuando los elementos cambian
   console.log('Elementos actualizados:', bebidasState);
  }, [bebidasState]);

  return (

    <>
      <table className='styled-table-bebida'>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Bebida</th>
            <th>Cantidad</th>
            <th>Valor unit.</th>
            <th>Total bebidas</th>
            <th>Act.</th>
          </tr>
        </thead>

        <tbody>

              {bebidasState.map((elem, index) => (
                <tr key={index} >
                  <td >{`${index + 1}`}.-</td> 
                  <td>{`${elem.bebida}`}</td>
                  <td>{`${elem.cantidadBebida}`}</td>
                  <td>$ {`${elem.valorUnitBebida}`}</td>
                  <td>$ {`${elem.totalBebida}`}</td> 
                  
                  <td><button className='my-button_eliminar' onClick={() => eliminarBebida(index)}><IoMdTrash/> </button></td>  
                </tr>
              ))}

            
        </tbody>

        </table>
    </>
  
  );
};

export default ListaBebidas;


