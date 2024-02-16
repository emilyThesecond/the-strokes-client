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
                <NavLink activeClassName='active' to='/'  onClick={toggleMenu}>Home</NavLink>
                <NavLink activeClassName='active' to='/songs' onClick={toggleMenu}>Music</NavLink>
                <NavLink activeClassName='active' to='/band' onClick={toggleMenu}>The Band</NavLink>
                <NavLink activeClassName='active' to='/boards' onClick={toggleMenu}>Boards</NavLink>
                <NavLink activeClassName='active' to='/shows' onClick={toggleMenu}>Shows</NavLink>
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