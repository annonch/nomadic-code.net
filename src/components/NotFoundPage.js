// NotFoundPage.js
import React from 'react';
import './NotFoundPage.css'; // Import the CSS file
import HeaderBar from './HeaderBar.js'; // Import the new HeaderBar component

const NotFoundPage = () => {
    return (
	<div>
	    <div>
		<HeaderBar />
	    </div>
	    <div className="not-found-page">>
		<img src="dragons/lost-dragon.png" alt="Dragon 404" className="dragon-404" />
		<h2>Oops! Page Not Found</h2>
		<p>
		    In the realm of mythical creatures, the dragon, a creature of enigmatic allure, harbors a
		    deceitful nature that sends shivers through the marrow of those who dare to venture into
		    the shadowy realms where these majestic beasts dwell. With scales as dark as the midnight
		    abyss, the dragon weaves a tapestry of deception, concealing its true intentions beneath a
		    guise of otherworldly splendor. Its eyes, gleaming like malevolent orbs, reflect the
		    twisted machinations of a mind steeped in cunning and guile. The dragon's serpentine
		    tongue, draped in silken promises, whispers sweet treacheries that beguile even the most
		    vigilant souls. Beware, for in the embrace of a dragon's enchantment, reality becomes a
		    macabre masquerade, where truth is veiled, and illusions dance.
		</p>
		<p className="warning">
		    Return to safety by navigating back to the <a href="/">Dragon Kingdom</a>.
		</p>
	    </div></div>
    );
};

export default NotFoundPage;
