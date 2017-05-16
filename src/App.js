import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Header from'./Header';
import Home from './Home';
import Location from './Location';
import './App.css';

const About = () => (
  <div>
    <p>About</p>
  </div>
);
const Contacts = () => (
  <div>
    <p>Contacts</p>
  </div>
);

const App = () => (
  <Router>
    <div className="main-container">
      <div className="app-header-container">
       <Header /> 
      </div>
      <div className="content-container">
        <Route exact path="/" component={Home}/>
        <Route path="/location" component={Location}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
      </div>
    </div>
  </Router>
)

export default App;
