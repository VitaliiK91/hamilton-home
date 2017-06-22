import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import mainImgSrc from './images/main.jpg';
import './Home.css';

const Home = () => (
		<Grid>
			<Row>
				<Col xs={12} md={8}>
					<img className="main-img" src={mainImgSrc} alt="" />
				</Col>
				<Col xs={12} md={4}>
					<div className="text-container">
						<p>Since 1999, Hamilton Home has been providing affordable housing for International students, interns, tourists, just about anyone in need of a temporary home in San Diego. Hamilton Home is a pleasant alternative to hostels, hotels, and home stay programs. If you are relocating to San Diego, stay with us and explore this wonderful city, before committing to a long term lease</p>
					</div>
				</Col>
			</Row>
		</Grid>
)

export default Home;