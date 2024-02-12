import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ user, handleLogOut }) => {
    return (
        <div className='navbar'>
            {/* change to the strokes logo */}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/songs'>Music</NavLink>
            <NavLink to='/band'>The Band</NavLink>
            <NavLink to='/boards'>Boards</NavLink>
            {user ? (
                <>
                    <button onClick={handleLogOut}>Logout</button>
                </>
            ) : (
                <>
                    <NavLink to='/login'>Login</NavLink>
                </>
            )}
        </div>
    );
};

export default Nav;
