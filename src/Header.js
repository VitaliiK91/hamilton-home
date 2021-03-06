import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
} from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.css';

const Header = () => (
	<div className="Navigation__container">
		<Navbar  fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="link">Hamilton Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse className='menu-item'>
            <Nav>
              <NavItem>
				        <Link to="/location" className="link">Location</Link>
              </NavItem>
              <NavItem>
				        <Link to="/tour" className="link">Tour</Link>
              </NavItem>
			        <NavItem>
				        <Link to="/contacts" className="link">Contacts</Link>
              </NavItem>
              <NavItem>
				        <Link to="/fees" className="link">Services & Fees</Link>
              </NavItem>
              {/*<NavItem>
				        <Link to="/guestbook" className="link">Guestbook</Link>
              </NavItem>*/}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
	</div>
);

export default Header;
