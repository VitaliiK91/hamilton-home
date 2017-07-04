import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import {
	main,
	sunset,
	street,
	front_house,
} from './images';
import './Home.css';

const Home = () => (
		<Grid fluid>
			<Row>
				<Col sm={12} md={6}>
					<Panel header="About Us" className="drop-shadow">
						<div className="text-container">
							<p>Since 1999, Hamilton Home has been providing affordable housing for International students, interns, tourists, just about anyone in need of a temporary home in San Diego. Hamilton Home is a pleasant alternative to hostels, hotels, and home stay programs. If you are relocating to San Diego, stay with us and explore this wonderful city, before committing to a long term lease</p>
						</div>
					</Panel>
				</Col>
				<Col sm={12} md={6}>
					<div className="drop-shadow">
						<img className="main-img" src={main} alt="" />
					</div>
				</Col>
				<Col sm={12} md={6}>
					<div className="drop-shadow">
						<img className="main-img" src={front_house} alt="" />
					</div>
				</Col>
				<Col sm={12} md={6}>
					<div className="drop-shadow">
						<img className="main-img" src={street} alt="" />
					</div>
				</Col>
			</Row>
		</Grid>
)

export default Home;