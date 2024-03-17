import { useState } from "react";
const EditarElemento = ({ elemento, index, editarElemento }) => {
    const [nuevoValor, setNuevoValor] = useState(elemento);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      editarElemento(index, nuevoValor);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuevoValor}
          onChange={(event) => setNuevoValor(event.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>
    );
  };

  export default EditarElemento;