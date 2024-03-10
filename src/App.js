// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Formulario from "./components/calcularcomida/Formulario";
import Total from "./components/calcularcomida/Total";
import ListaElementos from "./components/calcularcomida/ListaElementos";
import FormBebida from "./components/calcularbebida/FormBebida";
import ListaBebidas from "./components/calcularbebida/ListaBebidas";
import TotalBebidas from "./components/calcularbebida/TotalBebidas";
import InformeFinal from "./components/InformeFinal";

const App = () => {
  // Intentar obtener los elementos almacenados en localStorage al inicio
  const storedElementos = JSON.parse(localStorage.getItem("elementos")) || []; // recupera array o elementos de localstorage de la comida
  const storedBebidasState =
    JSON.parse(localStorage.getItem("bebidasState")) || []; // recupera array o elementos de localstorage de la bebeidas
  const storedIndice = JSON.parse(localStorage.getItem("indice")) || [];
  const storedCu = JSON.parse(localStorage.getItem("cu")) || [];

  const [elementos, setElementos] = useState(storedElementos); // estado de comidas
  const [bebidasState, setBebidasState] = useState(storedBebidasState); // estado de bebidas
  const [indice, setIndice] = useState(storedIndice);
  const [cu, setCu] = useState(storedCu);

  useEffect(() => {
    // Almacena los elementos d comida en localStorage cada vez que cambien
    localStorage.setItem("elementos", JSON.stringify(elementos));
  }, [elementos]);

  useEffect(() => {
    // Almacena los elementos de bebida en localStorage cada vez que cambien
    localStorage.setItem("bebidasState", JSON.stringify(bebidasState));
  }, [bebidasState]);

  useEffect(() => {
    // Almacena los elementos de indice en localStorage cada vez que cambien
    localStorage.setItem("indice", JSON.stringify(indice));
  }, [indice]);

  useEffect(() => {
    // Almacena los elementos de indice en localStorage cada vez que cambien
    localStorage.setItem("cu", JSON.stringify(cu));
  }, [cu]);

  const agregarElemento = (nuevoElemento) => {
    setElementos([...elementos, nuevoElemento]);
  };

  const agregarBebida = (nuevaBebida) => {
    setBebidasState([...bebidasState, nuevaBebida]);
  };

  const arregloIndice = (nuevoIndice) => {
    setIndice([...indice, nuevoIndice]);
  };

  const arregloCu = (nuevoCu) => {
    setCu([...cu, nuevoCu]);
  };

  const eliminarElemento = (index) => {
    const nuevosElementos = [...elementos];
    nuevosElementos.splice(index, 1);
    setElementos(nuevosElementos);
  };

  const eliminarBebida = (index) => {
    const nuevaBebida = [...bebidasState];
    nuevaBebida.splice(index, 1);
    setBebidasState(nuevaBebida);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="verde">CALCULO DE COMIDAS</h1>
        <Formulario agregarElemento={agregarElemento} />
        <ListaElementos
          agregarElemento={agregarElemento}
          elementos={elementos}
          eliminarElemento={eliminarElemento}
          arregloIndice={arregloIndice}
        />
        <Total elementos={elementos} />
      </div>
      <div>
        <h1 className="verde">CALCULO DE BEBIDAS</h1>
        <FormBebida
          agregarBebida={agregarBebida}
          elementos={elementos}
          bebidasState={bebidasState}
        />
        <ListaBebidas
          bebidasState={bebidasState}
          eliminarBebida={eliminarBebida}
        />
        <TotalBebidas
          agregarBebida={agregarBebida}
          bebidasState={bebidasState}
          elementos={elementos}
          indice={indice}
          arregloCu={arregloCu}
          cu={cu}
        />
      </div>
      <div></div>
      <div>
        <h1 className="verde">INFORME FINAL</h1>
        <InformeFinal
          elementos={elementos}
          bebidasState={bebidasState}
          cu={cu}
        />
      </div>
    </>
  );
};

export default App;
