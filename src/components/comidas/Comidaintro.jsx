import React, { useState } from 'react';

const ContactForm = () => {
 const [formState, setFormState] = useState({
    name: '',
    comida: '',
    costoComida: ''
 });

 const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
 };

 const handleSubmit = (event) => {
    event.preventDefault();
    submitForm(formState);
    
 };

 const submitForm = (formData) => {
    // Lógica para enviar los datos del formulario
    console.log(formData);
    
 };

 return (
    <form onSubmit={handleSubmit}>
      
      <input 
      type="text" 
      id="name" 
      placeholder='Nombre y Apellido'
      name="name" 
      value={formState.name} 
      onChange={handleChange} />

      <input 
      type="text" 
      id="comida" 
      placeholder='Plato'
      name="comida" 
      value={formState.comida} 
      onChange={handleChange} />

      <input 
      type="number" 
      id="costoComida" 
      placeholder='Valor Plato'
      name="costoComida" 
      value={formState.costoComida} 
      onChange={handleChange} />

     
      
      <button type="submit">Submit</button>
    </form>
 );
};

export default ContactForm;

/*
Para hacer un formulario en React JS que envíe datos, puedes seguir estos pasos:

Crea un nuevo componente llamado "ContactForm" y define un estado llamado "formState" que tenga propiedades para almacenar los valores de los campos del formulario.

Dentro del componente "ContactForm", crea un formulario HTML con campos de entrada para el nombre, correo electrónico y mensaje.

Utiliza el evento "onChange" para cada campo de entrada y actualiza el estado "formState" cuando los valores de los campos cambien.

A continuación, crea una función llamada "handleSubmit" que se ejecutará cuando el usuario envíe el formulario. Esta función debe evitar el comportamiento predeterminado del evento de envío utilizando "event.preventDefault()" y luego llamar a otra función (por ejemplo, "submitForm") para manejar la lógica de envío de datos.

Aquí tienes un ejemplo de cómo se vería el componente "ContactForm":

Para capturar los datos del formulario, puedes utilizar el evento "onSubmit" en el componente "ContactForm" como se muestra en el ejemplo anterior. Cuando el usuario envíe el formulario, la función "handleSubmit" se ejecutará y llamará a la función "submitForm" para manejar la lógica de envío de datos.
En este caso, la función "submitForm" simplemente muestra los datos del formulario en la consola del navegador. Puedes reemplazar esta función con la lógica que desees utilizar para enviar los datos a tu servidor o almacenarlos en la base de datos local.
*/


