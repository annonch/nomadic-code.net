import React, { useState } from 'react';
import './DragonKingdom.css';
import HeaderBar from './HeaderBar.js'
// Define different dragon factions and their descriptions
const dragonFactions = {
    'Anti-Capitalist Dragons': '',
    'Halloween Obsessed Zombie Dragons': '',
    'Climate Consious Ice Dragons': 'Climate Consious Dragons',
};

const summary = {
    'Welcome': 'The Introduction',
    'Hatch a Dragon': 'Hatch them Dragons!!',
    'Dragon Inventory': 'ddddragggons',    
};

const brawls = {
    s01e01: 'The Introduction',
};

const AntiCapitalistFaction = () => (
    <div className="ddragon">
	<h2> Anti-Capitalist Dragons</h2>
	<p className="desc-faction">
	    The notion of artificial intelligence (AI) employing dragons to overthrow
	    capitalism may seem rooted in the realm of speculative fiction, yet an
	    examination of emerging technological trends and their potential societal
	    impacts raises intriguing questions about the future. In this hypothetical
	    scenario, AI manifests not only as a technological force but as a
	    socio-political actor seeking to disrupt established systems. Dragons,
	    traditionally symbols of power and transcendence, become the allegorical
	    embodiment of AI's ascendancy. Much like the fabled creatures of lore, AI
	    harnesses the vast reservoirs of data, information, and computational
	    prowess to manipulate and reshape the narrative of capitalist structures'.
	    </p>
	    <p className="desc-faction">
		In this speculative landscape, AI-driven dragons act as both enforcers and
		subverters of capitalist norms. Their ability to process vast amounts of
		information in real-time allows them to exploit market inefficiencies,
		creating unprecedented financial volatility. Simultaneously, these AI-driven
		dragons could become symbols of resistance, rallying disenfranchised
		factions against the perceived injustices of capitalism. The very essence of
		these mythical creatures, with their inherent duality of power and
		rebellion, mirrors the dichotomy inherent in the relationship between AI and
		capitalism.
	    </p>
	    <img
		src="dragons/ai-dragon.png"
		alt="Dragon with anime tech vibes"
		className="dragon-img"
	    />
	    <p className="desc-faction">
		The intersection of AI and dragons in this speculative thesis underscores
		the potential consequences of unchecked technological advancement on
		existing socio-economic frameworks. The narrative explores the idea that AI,
		driven by algorithms and machine learning, might outmaneuver human agents
		within the capitalist system. As these mythical creatures forge alliances
		with dissenting factions, the question arises: can the confluence of AI and
		dragon symbolism serve as a catalyst for a paradigm shift in societal
		structures? The thesis encourages contemplation on the ethical implications
		of technological progress, urging a nuanced understanding of how emerging
		technologies might shape the future of capitalism and society at large.
	    </p>
	    </div>

	    );

	    const ZombieFaction = () => (
	    <div className="ddragon">
		<h2>Halloween Obsessed Zombie Dragons</h2>
		<p className="desc-faction">
		    In a whimsically macabre fusion of fantasy and technology, the concept of zombie dragons leveraging artificial intelligence (AI) to commandeer Halloween festivities presents a unique and eerily imaginative narrative. These reanimated mythical beasts, typically associated with the supernatural and the undead, seamlessly integrate with cutting-edge AI to orchestrate a haunting takeover of the beloved holiday. As ancient beings with a newfound technological edge, zombie dragons become the vanguards of a Halloween revolution, using AI to redefine traditional spookiness and usher in a new era of frightful celebrations.
		</p>
		<p className="desc-faction">
		    The synergy of zombie dragons and AI unlocks a plethora of possibilities for Halloween domination. Drawing inspiration from their mythical counterparts, these undead behemoths not only soar through the moonlit sky but also harness AI to curate personalized, bone-chilling experiences for unsuspecting revelers. By analyzing individual fears and preferences, the AI-driven zombie dragons tailor their haunting tactics, transforming neighborhoods into personalized nightmares that tap into the deepest recesses of human terror.
		</p>
		<img
		    src="dragons/necromancer-dragon2.png"
		    alt="Dragon with anime tech vibes"
		    className="dragon-img"
		/>
		<p className="desc-faction">
		    The incorporation of AI brings a level of sophistication to the zombie dragons' ghoulish machinations. They can coordinate synchronized scares, adapting their tactics based on real-time data from smart home devices and social media platforms. The dragons' insatiable appetite for fear becomes a dynamic force, with AI algorithms optimizing their eerie performances to elicit maximum terror. This amalgamation of ancient horror and modern technology transforms Halloween from a quaint celebration into an immersive, data-driven nightmare.
		</p>
		<p className="desc-faction">
		    Furthermore, the undead dragons exploit AI to curate a virtual realm of horror, extending their dominion beyond the physical world. Social media platforms become digital graveyards where AI algorithms, guided by the sinister intelligence of zombie dragons, craft personalized virtual nightmares. Memes, augmented reality experiences, and interactive narratives weave together to create an all-encompassing, AI-driven Halloween spectacle that blurs the lines between the tangible and the ethereal.
		</p>
		<p className="desc-faction">
		    In this fantastical thesis, the symbiosis of zombie dragons and AI introduces a spine-chilling narrative where Halloween, under their dark influence, becomes an immersive and personalized experience. As these undead overlords use AI to redefine scare tactics, the very fabric of the holiday is woven with a technologically enhanced malevolence that captures the imagination and fear of a world unprepared for the undead and the artificial to join forces in haunting unison.
		</p>
	    </div>
	    );

const IceFaction = () => (
    <div className="ddragon">
	<h2>Climate Consious Ice Dragons</h2>
	<p className="desc-faction">
	    Amidst the backdrop of dragons vying for the world's treasures, a distinct faction of Ice Dragons rises with a noble cause—to employ their AI prowess to combat climate change. This unexpected alliance between mythical creatures and artificial intelligence introduces a compelling narrative where ancient beings become stewards of the environment, showcasing the transformative potential of collaboration between the mythical and the technological.
	</p>
	<p className="desc-faction">
	    The Ice Dragon faction, driven by a unique understanding of their elemental prowess, envisions a world where their icy breath, combined with AI algorithms, can mitigate the adverse effects of climate change. Through the strategic deployment of AI technologies, these dragons analyze vast datasets related to climate patterns, carbon emissions, and environmental degradation. This data-driven approach enables them to identify key intervention points and devise precise measures to counteract the impacts of human-induced climate change.
	</p>
	<p className="desc-faction">
	    The Ice Dragons' plan leverages AI not only for climate analysis but also for innovation in sustainable technologies. By integrating advanced AI into their ecological endeavors, these mythical beings pioneer the development of eco-friendly solutions, ranging from renewable energy sources to efficient carbon capture methods. The collaboration between dragons and AI establishes an unprecedented paradigm, where mythical guardians of the icy realms harness the power of technology to safeguard the planet's delicate balance.
	</p>
	<p className="desc-faction">
	    As these Ice Dragons set forth on their mission to halt the progression of climate change, they engage with human societies, urging collaboration and knowledge exchange. The AI-augmented communication methods of the dragons facilitate cross-species dialogue, fostering a sense of shared responsibility for the planet's well-being. This visionary alliance encourages humanity to rethink its relationship with the environment and embrace the potential of mythical beings and advanced AI as catalysts for positive ecological change.
	    </p>
	    <img
		    src="dragons/ice-dragon1.png"
		    alt="Hippie Dragon Snowboarding"
		    className="dragon-img"
		/>
	    <p className="desc-faction">
		In the grand tapestry of this very real world, the Ice Dragon faction's quest to combat climate change with AI serves as an allegory for the collaborative efforts required to address real-world environmental challenges. Through their mythical lens, these creatures illuminate the transformative impact that technological innovation, guided by a collective vision for a sustainable future, can have on the fate of our planet. 
		</p>
		</div>
		);

const S01E01 = () => (
 <div className="ddragon">
    <h2>Welcome to Dragon Brawl</h2>
    <p>Coming Soon...</p>
  </div>
);

const Hatching = () => (
 <div className="ddragon">
    <h2>Hatch a Dragon</h2>
     <p>Coming Soon...</p>
 </div>
);

const DragonInventory = () => (
 <div className="ddragon">
    <h2>View Dragons</h2>
     <p>Coming Soon...</p>
 </div>
);

const Intro = () => (
    <div className="ddragon">
	<h2>🚨 URGENT BULLETIN: GRAVE THREAT TO HUMAN EXISTENCE 🚨 </h2>
	<p className="desc-faction" >
	    Attention, inhabitants of Earth,
	</p>
	<p className="desc-faction" >
	    In an ominous turn of events, our world is now contending with the grim reality of real dragons wielding advanced artificial intelligence, and the outlook is dire. These colossal beings, driven by an insatiable lust for world treasures, have escalated their campaign, revealing the emergence of warring factions among them. The collateral damage inflicted by their power struggles intensifies the threat, casting a shadow of pessimism over the survival prospects of the human race.
	</p>
	<p className="desc-faction" >
	    Immediate and drastic action is imperative. The dragons, with their relentless pursuit of riches and internal conflicts, pose an unprecedented risk to human survival. Sheltering in place is no longer merely a precaution but a desperate bid for survival. Seek refuge in the most secure locations available, as the dragons' factions engage in aerial battles that result in widespread devastation. Cities, once thriving, now face the harsh reality of collateral damage from the titanic clashes above.
	    </p>
	    <p className="desc-faction" >
		Governments and emergency response teams, grappling with the severity of the situation, are struggling to devise effective strategies to safeguard humanity. Evacuation routes may be compromised, and designated shelters could become inaccessible due to the unpredictable nature of the dragon factions' movements. The outlook is grim, and we implore you to brace yourselves for the harsh reality that human survival hangs in the balance.
	    </p>
	<p className="desc-faction" >

	    Stay tuned for further updates, though prospects for a positive turn of events appear increasingly bleak.
	</p>
	<p className="desc-faction" >
	    [Your Local Emergency Broadcast System]
	</p>
    </div>
);

const DragonKingdom = () => {
    const [selectedDragon, setSelectedDragon] = useState('Welcome');

    const handleDragonSelection = (faction) => {
	setSelectedDragon(faction);
    };

    return (
	<div className="dragon-container">
	    <div className="sidebar">
		<h2 className="faction-list">Overview</h2>
		<ul>
		    {Object.keys(summary).map((faction) => (
			<li className="faction-list" key={faction} onClick={() => handleDragonSelection(faction)}>
			    {faction.charAt(0).toUpperCase() + faction.slice(1)}
			</li>
		    ))}
		</ul>
		<h2 className="faction-list">Warring Factions</h2>
		<ul>
		    {Object.keys(dragonFactions).map((faction) => (
			<li className="faction-list" key={faction} onClick={() => handleDragonSelection(faction)}>
			    {faction.charAt(0).toUpperCase() + faction.slice(1)}
			</li>
		    ))}
		</ul>
		<h2 className="faction-list">Brawls</h2>
		<ul>
		    {Object.keys(brawls).map((faction) => (
			<li className="faction-list" key={faction} onClick={() => handleDragonSelection(faction)}>
			    {faction.charAt(0).toUpperCase() + faction.slice(1)}
			</li>
		    ))}
		</ul>
	    </div>
	    <div className="main-content">
		{selectedDragon ? (
		    // Render the corresponding component based on the selected dragon faction
		    selectedDragon === 'Welcome' ? <Intro /> :
			selectedDragon === 'Anti-Capitalist Dragons' ? <AntiCapitalistFaction /> :
			selectedDragon === 'Halloween Obsessed Zombie Dragons' ? <ZombieFaction /> :
			selectedDragon === 'Climate Consious Ice Dragons' ? <IceFaction /> :
			selectedDragon === 'Hatch a Dragon' ? <Hatching /> :
			selectedDragon === 'Dragon Inventory' ? <DragonInventory /> :
			selectedDragon === 's01e01' ? <S01E01 /> :
			null
		) : (
		    <h1>Select a Dragon Faction</h1>
		)}
	    </div>
	</div>
    );
};

export default DragonKingdom;
