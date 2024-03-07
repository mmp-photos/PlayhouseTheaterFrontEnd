import Nav from './Nav';
import logo from '../assets/images/PTA_logo.png';

const Header = () => {
    return(
        <header>
            <a href="/"><img src={logo} alt='Playhouse Academy Logo' /></a>
            <Nav />
        </header>
    )
}

export default Header;