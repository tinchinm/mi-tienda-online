import './Footer.css'
import {Link} from "react-router-dom";

import LogoCirculo from '../../assets/img/logo-con-circulo.png'

const Footer = () => {
    return(
            
            <div className="footer">
                <div className="footer__flex">
                    <div>
                        <ul>
                            <Link to='/' className='a'>Home </Link>
                            <Link to='/services' className='a'>Servicios</Link>
                            <Link to='/tienda' className='a'>Tienda</Link>
                            <Link to='/about' className='a'>Nosotros</Link>
                            <Link to='/contact' className='a'>Contacto</Link>
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