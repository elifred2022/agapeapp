// src/components/Formulario.js
import React, { useState } from 'react';
import { CgAddR } from "react-icons/cg";

const FormBebida = ({ agregarBebida, bebidasState, elementos, arregloInformes  }) => {
  const [bebida, setBebida] = useState('');
  const [cantidadBebida, setCantidadBebida] = useState('');
  const [valorUnitBebida, setValorUnitBebida] = useState('');
  const [totalBebida, setTotalBebida] = useState('');
  
  const handleSubmit = (e) => {
    
    e.preventDefault();
    agregarBebida({ 
      bebida,
      cantidadBebida,
      valorUnitBebida,
      totalBebida:valorUnitBebida * cantidadBebida, 
      });
    setBebida('');
    setCantidadBebida('');
    setValorUnitBebida('');
    setTotalBebida('');
    
    
  };
    

  return (
    <>
    <form onSubmit={handleSubmit} className='formulario'>
      <label className='label-container'>
        Bebida:
        <input placeholder='Ingrese bebida' type="text" value={bebida} onChange={(e) => setBebida(e.target.value)} />
      </label>
      <label className='label-container'>
        Cantidad:
        <input placeholder='Ingrese cant de bebidas' type="text" value={cantidadBebida} onChange={(e) => setCantidadBebida(e.target.value)} />
      </label>
      <label className='label-container'>
        Valor de bebida:
        <input placeholder='Ingrese valor unit.' type="number" value={valorUnitBebida} onChange={(e) => setValorUnitBebida(e.target.value)} />
      </label>
      <button className='my-button_agregar' type="submit"><CgAddR/></button>
      
    </form>
    
    </>
    
    
    
  );
};

export default FormBebida;
