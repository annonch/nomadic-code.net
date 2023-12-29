import React, { useState } from 'react';
import './Zia.css'; // Import a CSS file for styling
const Zia = () => {
  const [currentDragon, setCurrentDragon] = useState("../dragons/zia.svg");
    const dragonSVGs = ["../dragons/Bad_Goisern_Dragon.svg",
			"../dragons/Cerdon_Dragon.svg",
			"../dragons/Coa_Illustration_Elements_Animal_Sea_Dragon.svg",
			"../dragons/Dragon_sessorant_de_face.svg",
			"../dragons/Meuble_dragon_simple.svg",
			"../dragons/Meuble_heraldique_Dragon_volant.svg",
			"../dragons/Orange_Dragon.svg",
			"../dragons/Red_Chinese_Dragon.svg",
			"../dragons/Saint_George.svg",
			"../dragons/Somerset_dragon.svg",
			"../dragons/Tenee_Dragon.svg",
			"../dragons/Welsh_dragon_.svg",
			"../dragons/Wessex_dragon.svg",
			"../dragons/dragon2.svg",
			"../dragons/dragon3.svg",
			"../dragons/dragon4.svg",
			"../dragons/wales.svg",
			"../dragons/wales2.svg"]; // Add your dragon image paths here

    const spawnDragon = () => {

	// Select a random dragon SVG from the array
	const randomDragonSVG = dragonSVGs[Math.floor(Math.random() * dragonSVGs.length)];

	// Clone the current array of dragons and add a new dragon with the random SVG
	setCurrentDragon(randomDragonSVG);
    };

    return (
	<div>
	    <article className="desc-home">
		<img
			      src={currentDragon}
			      alt="Zia turns into Dragon"
			      onClick={spawnDragon}
			      className="dragon-image"
			  />
	    </article>
	</div>    
  );
};

export default Zia;
