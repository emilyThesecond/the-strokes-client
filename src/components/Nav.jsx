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
                <NavLink className='navLink' to='/'  onClick={toggleMenu}>Home</NavLink>
                <NavLink className='navLink'  to='/songs' onClick={toggleMenu}>Music</NavLink>
                <NavLink className='navLink'  to='/band' onClick={toggleMenu}>The Band</NavLink>
                <NavLink className='navLink'  to='/boards' onClick={toggleMenu}>Boards</NavLink>
                <NavLink  className='navLink' to='/shows' onClick={toggleMenu}>Shows</NavLink>
                {user ? (
                    <button onClick={handleLogOut}>Logout</button>
                ) : (
                    <NavLink className='navLink' to='/login' onClick={toggleMenu}>Login</NavLink>
                )}
            </div>
            {/* <h1 className='the-strokes'>THE STROKES</h1> */}
            
        </div>
    );
};

export default Nav;