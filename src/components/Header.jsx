import Nav from './Nav';
import logo from '../assets/images/PTA_logo.png';

const Header = () => {
    return(
        <header>
            <img src={logo} alt='Playhouse Academy Logo' />
            <Nav />
        </header>
    )
}

export default Header;