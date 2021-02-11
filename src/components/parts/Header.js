/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
	return (
		<nav className="navbar navbar-light shadow-sm navbar-expand-md navigation-clean-button">
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src="/images/zenclass.jpg" alt="ZenLogo" width="50" height="50" />
				</a>
				<button data-toggle="collapse" className="navbar-toggler" data-target="#ZenToggler">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="ZenToggler">
					<ul className="nav navbar-nav ml-auto ULClassWeb">
						<li className="nav-item UlClass">	<a className="nav-link text-dark" href="#">Classroom</a>
						</li>
						<li className="nav-item">	<a className="nav-link active text-purple font-weight-bold" href="#">Webinars</a>
						</li>
					</ul>	<span className="navbar-text actions">
						<a role="button" className="btn btn-sm btn-outline text-purple LoginBtn" href="#">Log In</a>
						<a className="btn btn-sm SignupBtn action-button text-white" role="button" href="#">Sign Up</a>
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Header;