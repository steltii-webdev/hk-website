import {Link} from 'react-router-dom'
import hk from '../Images/hk-logo.png'

const Navbar = () => {
    return (  
        <nav id="navbar">
            <Link to="/"><img id="main_logo" src={hk} alt="HK-tekniikka" /></Link>
            <div id="links">
                <Link to="/" >Home</Link>
                <Link to="/About" >About</Link>
            </div>
        </nav>
    );
}

export default Navbar;