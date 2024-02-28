// src/components/Formulario.js
import React, { useState, useEffect } from 'react';
//import Calculos from '../Calculos';

const Formulario = ({ agregarElemento, arregloInformes }) => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState('');
  const [comida, setComida] = useState('');
  const [valorComida, setValorComida] = useState('');
  

  

  // Obtén el valor de count desde el almacenamiento local
  useEffect(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    // Almacena los elementos d comida en localStorage cada vez que cambien
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const newCount = `${count + 1}`; // TOTAL ASISTENTES, esto para irle dando un numero e ir incrmentando cada elemento q se va agregando
    agregarElemento({ nombre, comida, valorComida, newCount });
    setNombre('');
    setComida('');
    setValorComida('');
    setCount(prevCounter => prevCounter + 1);
    arregloInformes({count, nombre, valorComida });
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
