import React from 'react';
import './NavHeader.css';
import { Link } from 'react-router-dom';

const NavHeader = () => {
	return (
		<header>
			<Link to="/">Home</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/about-me">About Me</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/contact">Contact</Link>
		</header>
	);
};

export default NavHeader;
