import React from 'react';
import { Link } from 'react-router-dom';

const Header = function(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div>
                <Link Link to="/" className="navbar-brand">Home</Link>
            </div>
            <div>
                <Link Link to="/contact" className="navbar-brand">Contact</Link>
                <Link Link to="/about" className="navbar-brand">About</Link>
            </div>
        </nav>
    )
}

export default Header;