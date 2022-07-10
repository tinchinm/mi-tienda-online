import './Footer.css'
import {Link} from "react-router-dom";

import LogoCirculo from '../../assets/img/logo-con-circulo.png'

const Footer = () => {
    return(
            
            <div className="footer">
                <div className="footer__flex">
                    <div>
                        <ul>
                            <Link to='/' className='a'><li>Home </li></Link>
                            <Link to='/services' className='a'><li>Servicios</li></Link>
                            <Link to='/tienda' className='a'><li>Tienda</li></Link>
                            <Link to='/about' className='a'><li>Nosotros</li></Link>
                            <Link to='/contact' className='a'><li>Contacto</li></Link>
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