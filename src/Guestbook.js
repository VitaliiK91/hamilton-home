import React, { Component } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import './Guestbook.css';

var Firebase = require('firebase');

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA5TEB9mMYMTZmuQ3hyn8qfP9WfYQyDvhE",
	authDomain: "test-7c943.firebaseapp.com",
	databaseURL: "https://test-7c943.firebaseio.com",
	projectId: "test-7c943",
	storageBucket: "test-7c943.appspot.com",
	messagingSenderId: "1037914899373",
};
Firebase.initializeApp(config);

class Guestbook extends Component {
	constructor() {
		super();

		this.state = { data: {}};
	}

	componentWillMount() {
		const database = Firebase.database().ref('/items');
		database.on('value', (x) => {
			this.setState({ data: x.val() });
		});
	}

	render() {
		return (
			<Grid>
				<Row>
				{
					Object.values(this.state.data).map((entry) => (
							<Col xs={12} sm={6} lg={3}>
								<Panel header={entry.name}>
									<p><b>Date:</b> {entry.date || '-'}</p><br/>
									<p><b>Email:</b> {entry.email || '-'}</p><br/>
									<p><b>Origin:</b> {entry.origin || '-'}</p><br/>
								</Panel>
							</Col>
						)
					)
				}
				</Row>	
			</Grid>
		);
	}
}

export default Guestbook;