import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Header from'./Header';
import './App.css';

const Home = () => (
  <div>
    <p>Home</p>
  </div>
);
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
    <div>
      <div className="App-header">
       <Header /> 
      </div>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contacts" component={Contacts}/>
    </div>
  </Router>
)

export default App;
