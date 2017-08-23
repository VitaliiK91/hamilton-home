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
import Tour from './Tour';
import Fees from './Fees';
import Guestbook from './Guestbook';
import './App.css';


const App = () => (
  <Router>
    <div>
      <Header /> 
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/location" component={Location}/>
        <Route path="/tour" component={Tour}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/fees" component={Fees}/>
        <Route path="/guestbook" component={Guestbook}/>
      </div>
    </div>
  </Router>
)

export default App;
