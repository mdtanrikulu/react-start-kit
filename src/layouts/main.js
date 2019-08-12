import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../middleware';

import About from '../components/About';
import Header from '../components/Header';
import Home from '../components/Home';

function Users() {
	return <h2>Users</h2>;
}

class Main extends Component {
	render() {
		return (
			<ConnectedRouter history={history}>
				<div>
					<Header/>
					<div className="container__main">
						<Route path="/" exact component={Home} />
						<Route path="/about/" component={About} />
						<Route path="/users/" component={Users} />
					</div>
				</div>
			</ConnectedRouter>
		);
	}
}

export default Main;
