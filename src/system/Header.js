import React from 'react';
import { NavLink } from 'react-router-dom';

function Header (){
    return(
      <header>
        <nav>
          <li><NavLink exact to="/">about7117</NavLink></li>
          <li><NavLink exact to="/WorksPage">works</NavLink></li>
          <li><NavLink exact to="/ContactPage">contact</NavLink></li>
        </nav>
      </header>
    )
  }

  export default Header;
