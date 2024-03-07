import logo from '../../assets/images/PTA_logo.png';
import Nav from './Nav';
import LogOutButton from '../../features/user/LogOutButton.jsx'
const Header = () => {
    return(
        <header>
            <a href="/backstage"><img src={logo} alt='Playhouse Academy Logo' /></a>
            <Nav />
            <LogOutButton />
        </header>
    )
}

export default Header;