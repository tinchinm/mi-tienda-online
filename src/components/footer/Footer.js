import './Footer.css'
import LogoCirculo from '../../assets/img/logo-con-circulo.png'

const Footer = () => {
    return(
            
            <div className="footer">
                <div className="footer__flex">
                    <div>
                        <ul>
                            <li><a href=""> Home </a></li>
                            <li><a href=""> Servicios</a></li>
                            <li><a href=""> Tienda</a></li>
                            <li><a href=""> Nosotros</a></li>
                            <li><a href=""> Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={LogoCirculo} alt="logo-fixit"/>
                    </div>
                </div>
                <div className="footer__credito">
                    Desarrollado por Martin Marzialetti
                </div>
            </div>
        
    )
};

export default Footer;