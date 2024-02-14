// src/components/Formulario.js
import React, { useState } from 'react';

const FormBebida = ({ agregarBebida, bebidasState, elementos }) => {
  const [bebida, setBebida] = useState('');
  const [cantidadBebida, setCantidadBebida] = useState('');
  const [valorUnitBebida, setValorUnitBebida] = useState('');
  const [totalBebida, setTotalBebida] = useState('');
  //const [totalBebidaCu, setTotalBebidaCu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarBebida({ bebida,  cantidadBebida, valorUnitBebida, totalBebida:valorUnitBebida * cantidadBebida });
    setBebida('');
    setCantidadBebida('');
    setValorUnitBebida('');
    setTotalBebida('');
    //setTotalBebidaCu('');

    
  };
    

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bebida:
        <input type="text" value={bebida} onChange={(e) => setBebida(e.target.value)} />
      </label>
      <label>
        Cantidad:
        <input type="text" value={cantidadBebida} onChange={(e) => setCantidadBebida(e.target.value)} />
      </label>
      <label>
        Valor de bebida:
        <input type="number" value={valorUnitBebida} onChange={(e) => setValorUnitBebida(e.target.value)} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FormBebida;
