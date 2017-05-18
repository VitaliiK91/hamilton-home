import React, { Component } from 'react';
import mainImgSrc from './images/main.jpg';
import './Home.css';

const Home = () => (
  <div className="container">
  	<div className="image-container">
	  <img src={mainImgSrc} alt="" />
	</div>
	<div className="text-container">
		<p>Since 1999, Hamilton Home has been providing affordable housing for International students, interns, tourists, just about anyone in need of a temporary home in San Diego. Hamilton Home is a pleasant alternative to hostels, hotels, and home stay programs. If you are relocating to San Diego, stay with us and explore this wonderful city, before committing to a long term lease</p>
	</div>
  </div>
);

export default Home;