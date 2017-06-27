import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './Contacts.css';

const Contacts = () => (
	<Grid fluid>
		<Row>
			<Col xs={8} xsOffset={2} md={4} mdOffset={4} className='test'>
				<Panel header='Address'>
					<p>4751 Hamilton St. San Diego, CA 92116, USA</p>
				</Panel>
			</Col>
			<Col xs={8} xsOffset={2} md={4} mdOffset={4} className='test'>
				<Panel header='Email'>
					<p>hamiltonhomesd@aol.com</p>
				</Panel>
			</Col>
			</Row>
	</Grid>
);

export default Contacts;