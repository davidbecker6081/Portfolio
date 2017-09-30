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
				<img src="/" alt="David Becker Logo"/>
				<h2>
					Software Developer
				</h2>
			</div>
			<div className="nav-link-container">
				<Link to="/" className="nav-link">Home</Link>
				<Link to="/projects" className="nav-link">Projects</Link>
				<Link to="/about-me" className="nav-link">About Me</Link>
				<Link to="/blog" className="nav-link">Blog</Link>
				<Link to="/contact" className="nav-link">Contact</Link>
			</div>
			<div className="quick-contact">
				<div className="quick-contact-links">
					<a href="default.asp" target="_blank">
						<img src="/" alt="Git" />
					</a>
					<a href="default.asp" target="_blank">
						<img src="/" alt="LI" />
					</a>
					<a href="default.asp" target="_blank">
						<img src="/" alt="Tur" />
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
