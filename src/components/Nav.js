import React from 'react';
import logo from '../Assets/Logo.png';
import './Nav.css';

const Nav = () => {
    const navStyle = {
        backgroundColor: 'white',
        color: 'white',
        height: '45px',
        padding: '10px',
    };

    const navItems = {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, auto)',
        gap: '2.5%',
        listStyleType: 'none',
        padding: '10px',
        margin: '0px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    };

    return (
        <nav className="nav" style={navStyle}>
            <ul style={navItems}>
                <li><img src={logo} alt="logo" /></li>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#menu">Menu</a></li>
                <li><a href="/reserve">Reservations</a></li>
                <li><a href="/#order">Order Online</a></li>
                <li><a href="/#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;
