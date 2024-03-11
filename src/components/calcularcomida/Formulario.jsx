
import React, { useState } from 'react';

const Formulario = ({ agregarElemento }) => {
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
    setNombre('');
    setPorcentaje(0);
    setCalcPorcentaje(calcPorcentaje);
    setValorComidaConPorcentaje(valorcomidaConPorcentaje);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Ingrese nombre'/>
      </label>
      <label>
        Comida:
        <input type="text" value={comida} onChange={(e) => setComida(e.target.value)} placeholder='ingrese plato selecc'/>
      </label>
      <label>
        Valor de comida:
        <input type="number" value={valorComida} onChange={(e) => setValorComida(e.target.value)} placeholder='ingrese vaor de plato'/>
      </label>
      <label>
        Porcenteje ?:
        <input type="number" value={porcentaje} onChange={(e) => setPorcentaje(e.target.value)} placeholder='tiene % adicional?'/>
      </label>
      <button type="submit" className='my-button_agregar'>Agregar</button>
    </form>
  );
};

export default Formulario;
