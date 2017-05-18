import React, { Component } from 'react';
import './Contacts.css';

const Contacts = () => (
  <div className="container">
	<div className="text-container" style={{flexDirection:'column'}}>
		<p><span style={{color:'red'}}>Address:</span> 4751 Hamilton St. San Diego, CA 92116, USA</p>
		<p><span style={{color:'green'}}>Email</span>: hamiltonhomesd@aol.com</p>
	</div>
  </div>
);

export default Contacts;