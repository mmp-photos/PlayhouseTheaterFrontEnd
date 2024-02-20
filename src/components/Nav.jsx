import '../assets/styles/styles.css'
import { Link } from 'react-router-dom';
import Admin from './Admin';
const Nav = () => {
    return(
        <nav>
            <ul>
                <li><Link to={"/admin"}>Admin</Link></li>
                <li>Home</li>
                <li>Programs</li>
                <li>Our Other Sites</li>
                <li>Support Us</li>
            </ul>
        </nav>
    )
};

export default Nav;
