import React, { useState } from 'react';
import { CgAddR } from "react-icons/cg";

const Formulario = ({ agregarElemento, almacenPorcentEfectivo, editarElemento, indice }) => {
  
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [valorComida, setValorComida] = useState('');
  const [porcentaje, setPorcentaje] = useState(0);
  const [calcPorcentaje, setCalcPorcentaje] = useState(0);
  const [valorcomidaConPorcentaje, setValorComidaConPorcentaje] = useState(0);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarElemento({ 
      nombre, 
      comida, 
      valorComida, 
      porcentaje, 
      calcPorcentaje: valorComida * porcentaje / 100,
      valorComidaConPorcentaje: parseInt(valorComida * porcentaje / 100) + parseInt(valorComida),
       });
    
    
    setNombre('');
    setComida('');
    setValorComida('');
    //setNombre('');
    setPorcentaje(0);
    setCalcPorcentaje(calcPorcentaje);
    setValorComidaConPorcentaje(valorcomidaConPorcentaje);
    
  };

  return (
    <>
    
     <form onSubmit={handleSubmit} className='formulario'>
      <label className='label-container'>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese nombre'/>
      </label>
      <label className='label-container'>
        Comida:
        <input type="text" value={comida} onChange={(e) => setComida(e.target.value)} placeholder='ingrese plato selecc'/>
      </label>
      <label className='label-container'>
        Valor de comida:
        <input type="number" value={valorComida} onChange={(e) => setValorComida(e.target.value)} placeholder='ingrese vaor de plato'/>
      </label>
      
     
      <button type="submit" className='my-button_agregar'><CgAddR /></button>
    </form>
    </>
   
  );
};

export default Formulario;