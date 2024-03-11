import React, { useEffect, useState } from 'react';
import { IoMdTrash } from "react-icons/io";

const ListaElementos = ({ elementos, eliminarElemento, arregloIndice }) => {
  
  const [totalIndex, setTotalIndex] = useState(elementos.length);

  useEffect(() => {
     arregloIndice({totalIndex}); // aqui fue q pude pasar  el valor de totalIndex al padre en el estado de indice en App
  }, [totalIndex]);
  
 
  useEffect(() => {
    setTotalIndex(elementos.length);
    }, [elementos]);

  useEffect(() => {
    // Ejecutar alguna lógica cuando los elementos cambian
    console.log('Elementos actualizados:', elementos);
  }, [elementos]);

  return (
    <>
      <table className='styled-table'>
        <thead>
          <tr>
             <th>Nº</th>
            <th>Nombre</th>
            <th>Plato</th>
            <th>Valor/plato</th>
            <th>% adicional</th>
            <th>Total/plato</th>
            <th>Act.</th>
          </tr>
        </thead>

        <tbody>
            {elementos.map((elem, index) => (
                <tr key={index} >
                  <td >{`${index + 1}`}.-</td> 
                  <td>{`${elem.nombre}`}</td>
                  <td>{`${elem.comida}`}</td>
                  <td>$ {`${elem.valorComida}`}</td>
                  <td>{`${elem.porcentaje}`} %</td> 
                  <td>$ {`${elem.valorComidaConPorcentaje}`} </td> 
                  <td><button className='my-button_eliminar' onClick={() => eliminarElemento(index)}><IoMdTrash /></button></td>  
                </tr>
              ))}
            </tbody>
       
       
        
      </table>
    </>
    
  );
};

export default ListaElementos;
