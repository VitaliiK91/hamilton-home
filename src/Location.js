import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './Location.css';

const Location = () => (
	<Grid>
			<Row>
				<Col xs={12} md={12}>
					<div className="main-map-container">
						<GoogleMapReact
							bootstrapURLKeys={{
								key: 'AIzaSyAgr9_YE2cVsuXKkOh_9Ym0MXc7Yh2Uopw',
								language: 'en',
							}}
							defaultCenter={{lat: 32.763875, lng: -117.136162}}
							defaultZoom={17}
						/>
						// TODO: add marker
					</div>
				</Col>
				<Col xs={12} md={12}>
					<Panel className='main-text-container'>
						<p>Located north of Adams Ave in University Heights, just about anything you want is 15 minutes away. University Heights is one of San Diego’s older, established communities and is slightly north east from downtown. North of Adams Ave has limited rentals and mostly owner occupied homes with little vehicle and foot traffic. Uber is super active in this area and a ride request takes minutes. The bus stop is ½ block and a ride downtown or to San Diego State University (one bus stop away) takes 15 minutes. The beach is 4 miles and Mission Valley and its shopping malls are just down the hill. You can walk to dinner! Restaurants, pubs, a park and night time entertainment are all within a 15 minute walk.</p>
						<p>If you are attending University of California – San Diego (UCSD) La Jolla campus, you can catch a shuttle from UCSD’s Hillcrest Location (UCSD Hospital). UCSD hospital is 1.2 miles from Hamilton Home.
						</p>
					</Panel>
				</Col>
			</Row>
		</Grid>
)

export default Location;