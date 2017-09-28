import React from 'react';
import './NavHeader.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {
	return (
		<header>
			<Link to="/" className="nav-link">Home</Link>
			<Link to="/projects" className="nav-link">Projects</Link>
			<Link to="/about-me" className="nav-link">About Me</Link>
			<Link to="/blog" className="nav-link">Blog</Link>
			<Link to="/contact" className="nav-link">Contact</Link>
		</header>
	);
};

export default NavHeader;
