import React from 'react';
import Nav from '../system/Nav';
import './Header.css';

function Header (){
    return(
      <header className="Header">
        <div className="headerLogo" onClick="">
          <p>7117</p>
        </div>
        <div className="HeaderNavOn">aa</div>
        <Nav></Nav>
      </header>
    )
  }

  export default Header;
