// src/components/Formulario.js
import React, { useState } from 'react';

const Formulario = ({ agregarElemento }) => {
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [valorComida, setValorComida] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarElemento({ nombre, comida, valorComida });
    setNombre('');
    setComida('');
    setValorComida('');
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
