import React from 'react'

import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className='form-title'>
        <h1> Contactate con Nosotros </h1>
      </div>
      <div className='form'>
        <label className='label' for="nombre">Nombre</label>
        <input type="text" className='form-input' id="nombre" placeholder="Nombre" />

        <label className='label' for="email">Direccion de E-Mail</label>
        <input type="email" className='form-input' id="email" placeholder="nombre@ejemplo.com" />

        <label className='label' for="consulta">Consulta:</label>
        <textarea id="consulta" className='form-input' rows="5" placeholder="Dejanos aquí tu consulta"></textarea>

        <input type="button" className='btn' name="enviar" id="enviar" value="Enviar" />
      </div>

    </div>
  )
}

export default Contact