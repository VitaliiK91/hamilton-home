import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import './Tour.css';
import { 
	bedroom,
	bedroom2,
	bedroom3,
	bedroom4,
	bedroom5,
	bedroom6,
	bedroom7,
	bedroom_thumb,
	bedroom_thumb2,
	bedroom_thumb3,
	bedroom_thumb4,
	living_room,
	living_room1,
	front_house,
	front_house1,
	sunset,
	street,
 } from './images';

const IMAGES =
[
	{
			src:  bedroom,
			thumbnail:  bedroom_thumb,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom2,
			thumbnail:  bedroom_thumb2,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom3,
			thumbnail:  bedroom_thumb3,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom4,
			thumbnail:  bedroom_thumb4,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom5,
			thumbnail:  bedroom5,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom6,
			thumbnail:  bedroom6,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  bedroom7,
			thumbnail:  bedroom7,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Bedroom"
	},
	{
			src:  living_room,
			thumbnail:  living_room,
			thumbnailWidth: 266,
			thumbnailHeight: 200,
			caption: "Living Room"
	},
	{
			src:  living_room1,
			thumbnail:  living_room1,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Living Room"
	},
	{
			src:  front_house,
			thumbnail:  front_house,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "House"
	},
	{
			src:  front_house1,
			thumbnail:  front_house1,
			thumbnailWidth: 355,
			thumbnailHeight: 200,
			caption: "House"
	},
	{
			src:  street,
			thumbnail:  street,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Street"
	},
	{
			src:  sunset,
			thumbnail:  sunset,
			thumbnailWidth: 300,
			thumbnailHeight: 200,
			caption: "Sunset"
	},
];


const Tour = () => (
	<Grid>
		<Row>
			<Col xs={12} sm={12} md={12}>
				<Gallery
					images={IMAGES}
					enableImageSelection={false}
				/>
			</Col>
		</Row>
	</Grid>
);

export default Tour;