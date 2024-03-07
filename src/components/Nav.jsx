import { Link } from 'react-router-dom';
import Admin from './Admin';
const Nav = () => {
    return(
        <nav style={{marginLeft: "125px"}}>
        <div className="dropdown">
                <button className="dropbtn">Classes &nbsp;
                </button>
                    <div className="dropdown-content">
                    <a href="/all_classes">All Classes</a>
                    <a href="/all_locations">Classes by Location</a>
                    <a href="/all_ages">Classes Age Group</a>
                </div>
            </div> 
            <div className="dropdown">
                <button className="dropbtn">Our Other Sites&nbsp;
                </button>
                    <div className="dropdown-content">
                    <a href="https://playhouseonpark.org/" target="_blank">Playhouse on Park</a>
                    <a href="http://connecticutshakespearefestival.org/" target="_blank">CT Shakespeare Festival</a>
                    <a href="http://playhousetheatregroup.org/" target="_blank">Playhouse Theatre Group</a>
                    <a href="http://stoptimedance.org/" target="_blank">stop/time dance theater</a>
                    <a href="/backstage">Backstage</a>
                </div>
            </div> 
            <div className="dropdown">
                <button className="dropbtn">Support Us &nbsp;
                </button>
                    <div className="dropdown-content">
                    <a href="http://playhouseonpark.org/web2/donate.html" target="_blank">Donate</a>
                    <a href="https://interland3.donorperfect.net/weblink/weblink.aspx?name=E251561&id=7" target="_blank">The Angie Ponist Fund</a>
                    <a href="http://playhouseonpark.org/web2/Encore.html" target="_blank">Encore!</a>
                    <a href="http://playhouseonpark.org/web2/volunteer.html" target="_blank">Volunteer</a>
                    <a href="http://playhouseonpark.org/web2/DirectorsSociety.html" target="_blank">Directors Society</a>
                    <a href="http://playhouseonpark.org/web2/PopMerchandise.html" target="_blank">Playhouse Merchandise</a>
                    <a href="http://playhouseonpark.org/web2/RiverBendBookstore.html#" target="_blank">River Bend Bookshop</a>
                </div>
            </div> 
        </nav>
    )
};

export default Nav;
