import './Header.css'
import LogoFixit from '../../assets/img/logo-fixit.png'
import LogoFace from '../../assets/redes/facebook.png'
import LogoInsta from '../../assets/redes/instagram.png'
import LogoWpp from '../../assets/redes/whatsapp.png'
import CartWidget from '../cart_widget/CartWidget'

const NavBar = () => {
    return(
        <div className='header'>
            <div className='header__flex'>
                <div className='header__logo'>
                    <img src={LogoFixit} alt="logo"/>
                </div>
                <div className='header__sidebar'>
                    <div className='header__redes'>
                             <img src={LogoFace} alt="logo_facebook"/>
                             <img src={LogoInsta} alt="logo_instagram"/>
                             <img src={LogoWpp} alt="logo_whatsapp"/>
                    </div>
                    <div className='header__navbar'>
                        <nav>
                            <ul>
                                <li className='anchor'> Home </li>
                                <li className='anchor'> Servicios</li>
                                <li className='anchor'> Tienda</li>
                                <li className='anchor'> Nosotros</li>
                                <li className='anchor'> Contacto</li>
                                <li><CartWidget/></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    </div>
    )
};

export default NavBar;