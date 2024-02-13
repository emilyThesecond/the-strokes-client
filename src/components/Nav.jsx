import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ user, handleLogOut }) => {
    return (
        
         <div >
            <p className='entry-header'></p>
            <div className='navbar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/songs'>Music</NavLink>
                <NavLink to='/band'>The Band</NavLink>
                <NavLink to='/boards'>Boards</NavLink>
                <NavLink to='/shows'>Shows</NavLink>
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
        </div>
    );
};

export default Nav;
