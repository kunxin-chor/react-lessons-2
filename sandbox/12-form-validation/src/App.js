import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home'
import About from './pages/About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
