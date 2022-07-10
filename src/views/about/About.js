import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
      <div className='container'>
        <p className='title'>Acerca de Nosotros</p>
        <p className='content'> Somos una empresa que se dedica a la informática integral, abarcando gran parte de lo que conlleva. Realizamos <strong>servicio técnico y mantenimiento preventivo y correctivo</strong> tanto de <strong>computadoras de escritorio, notebooks e impresoras</strong>. <br/>
            También realizamos instalación y mantenimiento de todo tipo de <strong>redes</strong>, como asi tambien la puesta en marcha y estructuración de <strong>servidores</strong> y una <strong>red de dominio empresarial</strong>. <br/>
            Además, trabajamos con todo tipo de sistemas de seguridad, como <strong>cámaras de videovigilancia, controles de acceso biometricos y de proximidad</strong>. <br/>
            Por último, queremos destacar que trabajamos con sistemas de <strong>domótica integral</strong> para la automatización de empresas y hogares, logrando así, aprovechar todos los beneficios que la tecnología nos brinda y poder hacerlos parte de la vida cotidiana de todos.
        </p>
      </div>
    </div>
  )
}

export default About