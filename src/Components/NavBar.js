import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo/logo.png';
const NavBar = () => (
    <nav>
<img className = "logo" src={logo} alt="logo" /> 
        <ul>
            
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/shoppinglist">EIKA Shoppping List</Link>
            </li>
           
        </ul>
    </nav>
);

export default NavBar;