// src/App.js
import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Total from "./components/Total";
import ListaElementos from "./components/ListaElementos";

const App = () => {
  // Intentar obtener los elementos almacenados en localStorage al inicio
  const storedElementos = JSON.parse(localStorage.getItem("elementos")) || [];

  const [elementos, setElementos] = useState(storedElementos);

  useEffect(() => {
    // Almacena los elementos en localStorage cada vez que cambien
    localStorage.setItem("elementos", JSON.stringify(elementos));
  }, [elementos]);

  const agregarElemento = (nuevoElemento) => {
    setElementos([...elementos, nuevoElemento]);
  };

  const eliminarElemento = (index) => {
    const nuevosElementos = [...elementos];
    nuevosElementos.splice(index, 1);
    setElementos(nuevosElementos);
  };

  return (
    <div>
      <Formulario agregarElemento={agregarElemento} />
      <Total elementos={elementos} />
      <ListaElementos
        elementos={elementos}
        eliminarElemento={eliminarElemento}
      />
    </div>
  );
};

export default App;
