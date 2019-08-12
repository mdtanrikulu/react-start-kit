import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

class Header extends Component {
	render() {
		return (
			<nav
				className="navbar"
				role="navigation"
				aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src={logo} alt="" width="56px" />
					</a>
					<div
						role="button"
						className="navbar-burger burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</div>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/about/" className="navbar-item">
							About
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<div className="navbar-link">More</div>

							<div className="navbar-dropdown">
								<div className="navbar-item">About</div>
								<div className="navbar-item">Jobs</div>
								<div className="navbar-item">Contact</div>
								<hr className="navbar-divider" />
								<div className="navbar-item">
									Report an issue
								</div>
							</div>
						</div>
					</div>

					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<span className="button is-primary">
									<strong>Sign up</strong>
								</span>
								<span className="button is-light">Log in</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
