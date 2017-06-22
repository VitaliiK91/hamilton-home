import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import mainImgSrc from './images/main.jpg';

const Fees = () => (
		<Grid>
			<Row>
				<Col xs={12} md={6}>
					<Panel header={"Single Occupancy"}>
						<ul>
							<li>$980 for 4 weeks. After 4 weeks rent is prorated</li>
							<li>$350 per week, under 4 week stay</li>
						</ul>
    				</Panel>
				</Col>
				<Col xs={12} md={6}>
					<Panel header={"Double Occupancy*"}>
						<ul>
							<li>$600 for 4 weeks, each person**</li>
						</ul>
    				</Panel>
				</Col>
				<Col xs={12} md={12}>
					<Panel header={"Includes"}>
						<ul>
							<li>Private room</li>
							<li>Use of fully furnished living area</li>
							<li>Use of Fully equipped kitchen</li>
							<li>Gas & Electric</li>
							<li>TV reception (basic) & Internet</li>
							<li>Weekly Cleaning</li>
							<li>Most of your groceries and all paper/cleaning products</li>
							<li>There is also a swimming pool, surf boards, wet suits, a bike and ping pong table available for your use</li>
						</ul>
    				</Panel>
				</Col>
				<Row>
					<Col sm={12} md={12}>
						*  Shared room if available. Two rooms in Hamilton Home can accommodate<br/>
						**  2 very close people (One bed - full or queen)<br/>
						***  Deposit is required at the time of reservation, to hold the room<br/>
						****  We accept Pay pal, cash and most personal checks<br/>
						*****  We do not accept credit or debit cards
					</Col>
				</Row>
			</Row>
		</Grid>
)

export default Fees;