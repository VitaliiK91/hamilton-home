import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from'./Header';
import Home from './Home';
import Location from './Location';
import Contacts from './Contacts';
import './App.css';

const About = () => (
  <div>
    <p>About</p>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Header /> 
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/location" component={Location}/>
        <Route path="/about" component={About}/>
        <Route path="/contacts" component={Contacts}/>
      </div>
    </div>
  </Router>
)

export default App;
