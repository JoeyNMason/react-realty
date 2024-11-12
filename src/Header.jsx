import React from 'react';
import './styles.css';

const Header = () => {
    return(
        <header id='navbar'>
            <a href='#' className='logo'>Logo</a>
            <ul>
                <li><a href='#page1'>Home</a></li>
                <li><a href='#page2'>Listings</a></li>
                <li><a href='#page3'>About</a></li>
                <li><a href='#page4'>Our Services</a></li>
                <li><a href='#page5'>Contact Us</a></li>
            </ul>
            <i className="bi bi-list" id='menu-icon'></i>
        </header>
    );
};

export default Header;