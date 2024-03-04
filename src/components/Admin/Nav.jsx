import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div class="navbar">
        <Link to="/">Home</Link>
        <div class="dropdown">
            <button class="dropbtn">
                Classes &nbsp;
            </button>
            <div class="dropdown-content">
                <a href="#">Programs to come!</a>
            </div>
        </div> 
            <div class="dropdown">
                <button class="dropbtn">Our Other Sites&nbsp;
                <i class="fa fa-caret-down"></i>
                </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Support Us &nbsp;
                <i class="fa fa-caret-down"></i>
                </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
        </div>
    )
};

export default Nav;
