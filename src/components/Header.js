import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = function(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <NavLink to="/" className="navbar-brand">Home</NavLink>
            </div>
            <div>
                <NavLink to="/contact" className="navbar-brand">Contact</NavLink>
                <NavLink to="/about" className="navbar-brand">About</NavLink>
            </div>
        </nav>
    )
}

export default Header;