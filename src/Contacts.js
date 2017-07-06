import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => (
	<Grid fluid>
		<Row>
			<Col xs={12}  md={6} mdOffset={3} className='text'>
				<Panel header='Address'>
					<p><adress>4751 Hamilton St. San Diego, CA 92116, USA</adress></p>
				</Panel>
			</Col>
			<Col xs={12} md={6} mdOffset={3} className='text'>
				<Panel header='Email'>
					<a href="mailto:hamiltonhomesd@aol.co">hamiltonhomesd@aol.com</a>
				</Panel>
			</Col>
			</Row>
	</Grid>
);

export default Contacts;