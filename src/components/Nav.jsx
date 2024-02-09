import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        {/* change to the strokes logo */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/music'>Music</NavLink>
      <NavLink to='/band'>The Band</NavLink>
      <NavLink to='/boards'>Boards</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </div>
  )
}

export default Nav
