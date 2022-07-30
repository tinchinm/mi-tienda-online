import React from 'react'

import './Services.css';

const services = () => {
  return (
    <div className="content__flex">
        <div>
            <div className='img_cont'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Services%2Fservicio_tecnico.jpg?alt=media&token=a2c2df42-1e9b-481b-8be9-929525ccbd64" alt="img-servicio-tecnico" />
                <p>Servicio Técnico Especializado</p>
            </div>
            <div className='img_cont'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Services%2Fredes.jpg?alt=media&token=de940e8f-fcc3-49e3-808d-8b996d4a4cca" alt="redes" />
                <p>Instalacion y mantenimiento de Redes</p>
            </div>
            <div className='img_cont'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Services%2Fvideovigilancia.jpg?alt=media&token=755e53fe-3f87-4475-a72a-d5a70caa136c" alt="vigilancia" />
                <p>Sistemas de Videovigilancia</p>
            </div>
        </div>
        <div>
            <div className='img_cont'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Services%2Fcontrol%20de%20acceso.jpg?alt=media&token=d13ff630-a14e-4a15-881c-efe6c1a07aca" alt="accesos" />
                <p>Controles de Acceso</p>
            </div>
            <div className='img_cont'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fixit-store.appspot.com/o/Services%2Fdomotica.png?alt=media&token=cdf494f9-57d0-48fa-a1c9-123d38df95cb" alt="domotica" />
                <p>Domótica</p>
            </div>
        </div>
    </div>
  )
}

export default services