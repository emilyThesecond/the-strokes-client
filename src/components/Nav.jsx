import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ user, handleLogOut }) => {
    return (
        <div className='nav-container'>
            <div className='entry-header'></div>
            <div className='navbar-icons'>
                <NavLink to='/'><i className="fas fa-home"></i></NavLink>
                <NavLink to='/songs'><i className="fas fa-music"></i></NavLink>
                <NavLink to='/band'><i className="fas fa-users"></i></NavLink>
                <NavLink to='/boards'><i className="fas fa-chalkboard"></i></NavLink>
                <NavLink to='/shows'><i className="fas fa-ticket-alt"></i></NavLink>
                {user ? (
                    <>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/login'><i className="fas fa-sign-in-alt"></i></NavLink>
                    </>
                )}
            </div>
            <div className='navbar-words'>
                <NavLink to='/'>home</NavLink>
                <NavLink to='/songs'>music</NavLink>
                <NavLink to='/band'>the band</NavLink>
                <NavLink to='/boards'>boards</NavLink>
                <NavLink to='/shows'>shows</NavLink>
                {user ? (
                    <>
                        <button onClick={handleLogOut}>Logout</button>
                    </>
                ) : (
                    <>
                        <NavLink to='/login'><i className="fas fa-sign-in-alt"></i></NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Nav;
