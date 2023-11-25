// App.js
import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dragon from './components/Dragon.js';
import HeaderBar from './components/HeaderBar.js'; // Import the new HeaderBar component
import AboutPage from './components/AboutPage.js'; // Create and import AboutPage component

import './App.css';


function App() {
  return (

      <div className="App">
          <HeaderBar />
	  <div>
	      <Dragon/>
	  </div>
      </div>

  );
}

export default App;
