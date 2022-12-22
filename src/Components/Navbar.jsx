import {Link} from 'react-router-dom'

import Hklogo from '../Images/hk-logo.png'

const Navbar = () => {
    return (  
        <nav id="navbar">
            <img src={Hklogo} alt="" id="navlogo"/>
            <div id="links">
                <Link to="/" >Koti</Link>
                <Link to="/contact" >Yhteydenotto</Link>
            </div>
        </nav>
    );
}

export default Navbar;