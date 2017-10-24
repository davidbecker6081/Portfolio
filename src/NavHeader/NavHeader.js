import React from 'react';
import './NavHeader.css';
import { Link, NavLink } from 'react-router-dom';

const NavHeader = ({ currentPage }) => {

	return (
		<header>
			<div className="nav-logo">
				<h1>David Becker</h1>
				<div className="david-logo" />
				<h2>Front-End Developer</h2>
			</div>
			<div className="nav-link-container">
				<NavLink exact to="/" className={'nav-link'}>
					Home
				</NavLink>
				<NavLink exact to="/about-me" className={'nav-link'}>
					About Me
				</NavLink>
				<NavLink exact to="/projects" className={'nav-link'}>
					Projects
				</NavLink>
				<NavLink exact to="/contact" className={'nav-link'}>
					Contact
				</NavLink>
			</div>
			<div className="quick-contact">
				<div className="quick-contact-links">
					<a
						href="https://github.com/davidbecker6081"
						target="_blank"
						rel="noopener noreferrer"
					/>
					<a
						href="https://www.linkedin.com/in/david-a-becker/"
						target="_blank"
						rel="noopener noreferrer"
					/>
					<a
						href="https://www.turing.io/alumni/david-becker"
						target="_blank"
						rel="noopener noreferrer"
					/>
				</div>
				<p>david@beckersite.com</p>
			</div>
		</header>
	);
};

export default NavHeader;
