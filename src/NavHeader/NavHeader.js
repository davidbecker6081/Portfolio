import React from 'react';
import './NavHeader.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {
	return (
		<header>
			<div className="nav-logo">
				<h1>
					David Becker
				</h1>
				<div className="david-logo"></div>
				<h2>
					Software Developer
				</h2>
			</div>
			<div className="nav-link-container">
				<Link to="/" className="nav-link">Home</Link>
				<Link to="/about-me" className="nav-link">About Me</Link>
				<Link to="/projects" className="nav-link">Projects</Link>
				<Link to="/contact" className="nav-link">Contact</Link>
			</div>
			<div className="quick-contact">
				<div className="quick-contact-links">
					<a href="https://github.com/davidbecker6081" target="_blank" rel="noopener noreferrer">
					</a>
					<a href="https://www.linkedin.com/in/david-a-becker/" target="_blank" rel="noopener noreferrer">
					</a>
					<a href="https://www.turing.io/alumni/david-becker" target="_blank" rel="noopener noreferrer">
					</a>
				</div>
				<p>
					david@beckersite.com
				</p>
			</div>
		</header>
	);
};

export default NavHeader;
