import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Navbar = () => {
    return (
        <div>
            <h2>My Website</h2>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                <NavLink to="/clients">Clients</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};
Link
export default Navbar;