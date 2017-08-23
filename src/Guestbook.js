import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
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

		this.state = { data: {}, isAuth: true };
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
				{this.state.isAuth &&
					<Row>
						<Button>Add Guest +</Button>
					</Row>
				}
				<br/>
				<Row>
				{
					Object.values(this.state.data)
					.sort((i, j) => Date.parse('1/' + i.date) - Date.parse('1/' + j.date))
					.map((entry) => (
							<Col xs={12} sm={6} lg={3}>
								<Panel header={entry.name} className="no-center">
									<p><b>Date:</b> {entry.date || '-'}</p><br/>
									<p><b>Email:</b> {entry.email || '-'}</p><br/>
									<p><b>Origin:</b> {entry.origin || '-'}</p>
									{this.state.isAuth && (<p className="remove_btn"><Button bsStyle="danger">Delete</Button></p>) }
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