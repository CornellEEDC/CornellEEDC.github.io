
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/navbar';
import reportWebVitals from './reportWebVitals';

import './main.css';


// Pages
import Home from './pages/Home'
import Members from './pages/members';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Navigation />
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/members" element={<Members />} />
      </Routes>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
