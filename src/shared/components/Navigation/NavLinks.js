import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './NavLinks.css';
import { AuthContext } from '../../Context/AuthContext';

const NavLinks = props => {
    const auth = useContext(AuthContext);
  return (
   <ul className='nav-links'>
    <li>
        <NavLink to="/" >All Users</NavLink>
    </li>
    {auth.isLoggedIn && (
    <li>
        <NavLink to="/u1/places">My Places</NavLink>
    </li>
    )}
    {auth.isLoggedIn && (
    <li>
        <NavLink to="/places/new">Add Places</NavLink>
    </li>
    )}
    {!auth.isLoggedIn && (
    <li>
        <NavLink to="/login">Authenticate</NavLink>
    </li>
    )}
    {auth.isLoggedIn && (
    <li>
        <button onClick={auth.logout}>Logout</button>
    </li>
    )}
   </ul>
  )
}

export default NavLinks