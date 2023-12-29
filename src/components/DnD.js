// AboutPage.js
import React from 'react';

import './AboutPage.css'; // Import the CSS file
import HeaderBar from './HeaderBar.js'; // Import the new HeaderBar component

const AboutPage = () => {
    return (
	<div>
	    <div>
		<HeaderBar />
	    </div>
	    <div className="about-page">
		<h2 className="personal">Hic Sunt Dracones</h2>
		<p className="desc-intro">
		    In the Dwarven Mines:


		    Welcome to Dragon Kingdom, a magical land filled with majestic dragons and
		    mythical creatures. Explore the wonders of our kingdom and learn about the
		    fascinating world of dragons. 
		    Dragon Kingdom is dedicated to fostering a deep appreciation for these legendary
		    beings and promoting harmony between dragons, humans, and AI.


		</p>
		<p className="desc-intro">
		    Dragon Kingdom is an Art Project & Personal Website. Any views
		    and technical information are my own, licensed, or in the public domain. 
		</p>
		<div className="desc-sum">
		    <h2 className="personal2">Christopher Hannon, PhD. </h2>
		    <a
			className="desc-link"
			href="Hannon.pdf"
			target="_blank"
			rel="noopener noreferrer"
		    >
			Resume | chris@nomadic-code.net
		    </a>
		    <p className="desc-desc">Software Engineer | Computer Scientist</p>


		    
		    
		    <div>
		    
		    </div>
		    
		    
		</div>
	    </div>
	</div>
    );
};

export default AboutPage;
