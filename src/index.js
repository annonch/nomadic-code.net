import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';

import App from './App';
import NotFoundPage from './components/NotFoundPage.js'
import AboutPage from './components/AboutPage.js'; // Create and import AboutPage component
import DragonKingdom from './components/DragonKingdom.js'; // Create and import Dragon Kingdom component
import CellularAutomata from './components/CellularAutomata.js';  //ca junk

const router = createBrowserRouter([
    {
	path: "/",
	element: <App/>,
	errorElement: <NotFoundPage/>,
    },
    {
	path: "about",
	element: <div> <AboutPage /> </div>,
    },
    {
	path: "blog",
	element: <div> <NotFoundPage /> </div>,
    },
    {
	path: "dragon-kingdom",
	element: <div> <DragonKingdom /> </div>,
    },
    {
	path: "cellular-automata",
	element: <div> <CellularAutomata /> </div>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

