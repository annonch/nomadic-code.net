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
		<div>
		<Link to="/about" className="nav-link">
		    About
		</Link>
		    </div><div>
		<Link to="/blog" className="nav-link">
		    Blog
		</Link>
		    </div><div>
		<Link to="/cellular-automata" className="nav-link">
		    Cellular Automata Fun
		</Link>
		    </div><div>
		<Link to="/dragon-kingdom" className="nav-link">
		    Dragon Kingdom
		</Link>
		    </div>
	    </nav>
	</header>
    );
};

export default HeaderBar;
