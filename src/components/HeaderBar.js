// HeaderBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HeaderBar.css';

const HeaderBar = () => {
  return (
    <header className="header-bar">
	{/* Uncomment the line below if you want to add a logo */}
	<Link to="/">
	    <img src={"header-icon.png"} alt="Castle Logo" className="logo" />
	    </Link>
      <h1>nc's Dragon Kingdom</h1>
      <nav>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </header>
  );
};

export default HeaderBar;
