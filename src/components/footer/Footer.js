import './Footer.css'
import LogoCirculo from '../../assets/img/logo-con-circulo.png'

const Footer = () => {
    return(
            
            <div class="footer">
                <div className="footer__flex">
                    <div>
                        <ul>
                            <li><a href=""> Home </a></li>
                            <li><a href=""> Servicios</a></li>
                            <li><a href=""> Marcas</a></li>
                            <li><a href=""> Nosotros</a></li>
                            <li><a href=""> Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={LogoCirculo} alt="logo-fixit"/>
                    </div>
                </div>
                <div class="footer__credito">
                    Desarrollado por Martin Marzialetti
                </div>
            </div>
        
    )
};

export default Footer;