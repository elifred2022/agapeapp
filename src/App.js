import React, { useState } from "react";
import Header from "./components/header/Header";

// Componente para el formulario
const Formulario = ({ agregarElemento }) => {
  const [nombre, setNombre] = useState("");
  const [comida, setComida] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar un nuevo elemento a la lista
    agregarElemento({ nombre, comida, valor });
    // Limpiar los campos del formulario
    setNombre("");
    setComida("");
    setValor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Comida o plato"
          type="text"
          value={comida}
          onChange={(e) => setComida(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Valor del plato"
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Agregar</button>
    </form>
  );
};

// Componente para la lista de elementos
const ListaElementos = ({ elementos, eliminarElemento }) => {
  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>
          <strong>{elemento.nombre}</strong> - {elemento.comida} ($
          {elemento.valor}){/* Botón para eliminar el elemento */}
          <button onClick={() => eliminarElemento(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

// Componente principal
const App = () => {
  const [listaElementos, setListaElementos] = useState([]);

  const agregarElemento = (nuevoElemento) => {
    setListaElementos([...listaElementos, nuevoElemento]);
  };

  const eliminarElemento = (indice) => {
    const nuevaLista = [...listaElementos];
    nuevaLista.splice(indice, 1);
    setListaElementos(nuevaLista);
  };

  return (
    <div>
      <Header />
      <h1>App de React con Formulario y Lista</h1>
      <Formulario agregarElemento={agregarElemento} />
      <ListaElementos
        elementos={listaElementos}
        eliminarElemento={eliminarElemento}
      />
    </div>
  );
};

export default App;

/*
hacer una app en react js con un componente de un formulario para capturar datos (nombre, comida, valor de comida) otro componente para ir pintando cada elemento con .map y un boton de eliminar */

// separa los componentes y hacer usefect
