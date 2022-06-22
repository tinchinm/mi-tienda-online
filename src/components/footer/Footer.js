import './Footer.css'
import LogoCirculo from '../../assets/img/logo-con-circulo.png'

const Footer = () => {
    return(
            
            <div className="footer">
                <div className="footer__flex">
                    <div>
                        <ul>
                            <li className='a'>Home </li>
                            <li className='a'>Servicios</li>
                            <li className='a'>Tienda</li>
                            <li className='a'>Nosotros</li>
                            <li className='a'>Contacto</li>
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