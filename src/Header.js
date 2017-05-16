import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';
import './Header.css';

const Header = () => (
	<div className="header-container">
		<h2><Link to="/" className="link">Hamilton Home</Link></h2>
		<div className="menu-items-container">
			<h3><Link to="/location" className="link">Location</Link></h3>
			<h3><Link to="/about" className="link">About</Link></h3>
			<h3><Link to="/contacts" className="link">Contacts</Link></h3>
			<h3><Link to="/about" className="link">About</Link></h3>
			<h3><Link to="/contacts" className="link">Contacts</Link></h3>
		</div>
	</div>
);

export default Header;
