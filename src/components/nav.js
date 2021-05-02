import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav'>
      <nav className='nav-links'>
        <div className='logo'>
          <h2>CAVE'S CUT</h2>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <a href=''>Home</a>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <a href=''>About</a>
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              <a href=''>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
