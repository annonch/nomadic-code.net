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
//import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
    {
	path: "/",
	element: <App/>,
	errorElement: <NotFoundPage/>,
    },
    {
	path: "about",
	element: <div> <AboutPage /> </div>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
