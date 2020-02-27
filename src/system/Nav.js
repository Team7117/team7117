import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav (){
    return (
    <nav className="nav">
        <li><NavLink className="navLink" exact to="/">about7117</NavLink></li>
        <li><NavLink className="navLink" exact to="/WorksPage">works</NavLink></li>
        <li><NavLink className="navLink" exact to="/ContactPage">contact</NavLink></li>
    </nav>

    )
  }
  
  export default Nav;