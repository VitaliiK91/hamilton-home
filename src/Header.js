import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';
import './Header.css';

const Header = () => (
	<div className="header-container">
		<div className="logo-container">
			<Link to="/">Hamilton Home</Link>
		</div>
		<div className="menu-items-container">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/contacts">Contacts</Link>
		</div>
	</div>
);

export default Header;
