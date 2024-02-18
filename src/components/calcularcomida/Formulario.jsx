// src/components/Formulario.js
import React, { useState } from 'react';
import Calculos from '../Calculos';

const Formulario = ({ agregarElemento, arregloInformes }) => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [valorComida, setValorComida] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCount = `${count + 1}`; // TOTAL ASISTENTES, esto para irle dando un numero e ir incrmentando cada elemento q se va agregando
    agregarElemento({ newCount, nombre, comida, valorComida });
    setNombre('');
    setComida('');
    setValorComida('');
    setCount(prevCounter => prevCounter + 1)
    arregloInformes({newCount, nombre, valorComida });
    setNombre('');
   
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Comida:
        <input type="text" value={comida} onChange={(e) => setComida(e.target.value)} />
      </label>
      <label>
        Valor de comida:
        <input type="number" value={valorComida} onChange={(e) => setValorComida(e.target.value)} />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
};

export default Formulario;
