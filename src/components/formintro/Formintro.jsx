import React from "react";

export const Formintro = () => {
    return (
        <form className="formulario">
            <div className="container">
                <input type="text" placeholder="Nombre y Apellido" className="usuario"></input>
            </div>
            <div className="container">
                <input type="text" placeholder="Comida" className="comida"></input>
            </div>
            <div className="container">
                <input type="number" placeholder="Costo" className="costComida"></input>
            </div>
        </form>
        
    )
}