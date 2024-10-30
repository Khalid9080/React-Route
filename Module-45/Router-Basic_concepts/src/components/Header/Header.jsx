import { Link } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav>
                
                <Link to="/">Home</Link>
                <Link to="/clients">Clients</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Navbar;