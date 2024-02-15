import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ user, handleLogOut }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`nav-container ${isOpen ? 'open' : ''}`}>
            <div className='menu-toggle' onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            <div className='navbar'>
                <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
                <NavLink to='/songs' onClick={toggleMenu}>Music</NavLink>
                <NavLink to='/band' onClick={toggleMenu}>The Band</NavLink>
                <NavLink to='/boards' onClick={toggleMenu}>Boards</NavLink>
                <NavLink to='/shows' onClick={toggleMenu}>Shows</NavLink>
                {user ? (
                    <>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/login' onClick={toggleMenu}>Login</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Nav;