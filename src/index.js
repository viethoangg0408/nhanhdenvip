import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Component/Home/index.js';
import HomeIndex from './ComponentHome/index.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Router, Route } from 'react-router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
  <BrowserRouter>
      <Switch>
        <Router path="/home">
          <HomeIndex/>
        </Router>
        <Router path="/admin">
          <Home/>
        </Router>
      <Router path="/">
        <HomeIndex />
      </Router>
      </Switch>
    </BrowserRouter>
);

