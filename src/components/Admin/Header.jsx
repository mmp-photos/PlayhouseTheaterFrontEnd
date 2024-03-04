import logo from '../../assets/images/PTA_logo.png';
import Nav from './Nav';

const Header = () => {
    return(
        <header>
            <img src={logo} alt='Playhouse Academy Logo' />
            {/* <Nav /> */}
        </header>
    )
}

export default Header;