import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ user, handleLogOut }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav-container'>
            <div className='entry-header'></div>
            <div className='menu-toggle' onClick={toggleMenu}>
                <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
            </div>
            <div className={`navbar ${isOpen ? 'open' : ''}`}>
                <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                <NavLink to='/songs' onClick={toggleMenu}>Music</NavLink>
                <NavLink to='/band' onClick={toggleMenu}>The Band</NavLink>
                <NavLink to='/boards' onClick={toggleMenu}>Boards</NavLink>
                <NavLink to='/shows' onClick={toggleMenu}>Shows</NavLink>
                {user ? (
                    <button onClick={handleLogOut}>Logout</button>
                ) : (
                    <NavLink to='/login' onClick={toggleMenu}>Login</NavLink>
                )}
            </div>
            {/* <h1 className='the-strokes'>THE STROKES</h1> */}
            
        </div>
    );
};

export default Nav;