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
                            <a href=""><img src={LogoFace} alt="logo_facebook"/></a>
                            <a href=""><img src={LogoInsta} alt="logo_instagram"/></a>
                            <a href=""><img src={LogoWpp} alt="logo_whatsapp"/></a>
                    </div>
                    <div className='header__navbar'>
                        <nav>
                            <ul>
                                <li><a href=""> Home </a></li>
                                <li><a href=""> Servicios</a></li>
                                <li><a href=""> Tienda</a></li>
                                <li><a href=""> Nosotros</a></li>
                                <li><a href=""> Contacto</a></li>
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