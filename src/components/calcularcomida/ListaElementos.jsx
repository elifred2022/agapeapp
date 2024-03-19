import React, { useEffect, useState } from 'react';
import { IoMdTrash } from "react-icons/io";


const ListaElementos = ({ elementos, eliminarElemento, arregloIndice, almacenPorcentEfectivo, agregarElemento, editarElemento }) => {
  

  const [totalIndex, setTotalIndex] = useState(elementos.length);

  const totalPorcent = almacenPorcentEfectivo.reduce((acc, elem) => acc = parseInt(elem.descuento), 0);
  const traerValorComida = elementos.reduce((acc, elem) => acc = parseInt(elem.valorComidaConPorcentaje), 0);
  //const calcPorcentaje = traerValorComida * totalPorcent / 100;

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
                   
                   
                  <td>
                    <button className='my-button_eliminar' onClick={() => eliminarElemento(index)}><IoMdTrash /></button> 
                    {/*<button  className='my-button-agregar' onClick={() => handleChange(index) }    >Editar</button>*/}
                  
                  </td>  
                </tr>
              ))}
            </tbody>
       
       
        
      </table>
    </>
    
  );
};

export default ListaElementos;