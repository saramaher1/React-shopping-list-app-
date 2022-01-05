import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo/logo.png';
const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/shoppinglist">My Shoppping List</Link>
            </li>
           
        </ul>
    </nav>
);

export default NavBar;