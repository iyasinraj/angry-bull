import React from 'react';
import './Navbar.css'
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt="" srcset="" />
                <h1>Angry-Bull</h1>
            </div>
            
        </div>
    );
};

export default Navbar;