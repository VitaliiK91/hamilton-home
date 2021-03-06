import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import mainImgSrc from './images/main.jpg';
import './Fees.css';

const Fees = () => (
		<Grid>
			<Row>
				<Col xs={12} md={6}>
					<Panel header={"Single Occupancy"} className="no-center">
						<ul>
							<li>$980 for 4 weeks. After 4 weeks rent is prorated</li>
						</ul>
    				</Panel>
				</Col>
				<Col xs={12} md={5}>
					<Panel header={"Double Occupancy*"} className="no-center">
						<ul>
							<li>$600 for 4 weeks, each person**</li>
						</ul>
    				</Panel>
				</Col>
				<Col xs={12} md={6}>
					<Panel header={"Includes"} className="no-center">
						<ul>
							<li>Private room</li>
							<li>Use of fully furnished living area</li>
							<li>Use of Fully equipped kitchen</li>
							<li>Gas & Electric</li>
							<li>TV reception (basic) & Internet</li>
							<li>Weekly Cleaning</li>
							<li>All paper/cleaning products</li>
							<li>There is also a swimming pool, surf boards, wet suits, a bike and ping pong table available for your use</li>
						</ul>
    				</Panel>
				</Col>
				<Col xs={11} md={5}>
					*  Shared room if available. Two rooms in Hamilton Home can accommodate<br/>
					**  2 very close people (One bed - full or queen)<br/>
					***  Deposit is required at the time of reservation, to hold the room<br/>
					****  We accept Pay pal, cash and most personal checks<br/>
					*****  We do not accept credit or debit cards
				</Col>
				</Row>
		</Grid>
)

export default Fees;