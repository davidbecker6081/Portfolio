import React from 'react';
import './ProjectLink.css';
import FadeIn from 'react-fade-in';
// import { Link } from 'react-router-dom';

//contains an image with an overlay with technologies and Date completed
//image has title bar on bottom 3rd
//Link to main page GitHub

const ProjectLink = ({
	name,
	gitHub,
	imageUrl,
	technologies,
	testing,
	dateCompleted,
}) => {
	const tech = technologies.map((tech, i) => <li key={i}>{tech}</li>);

	const testSuite = testing ? testing : 'No Testing Suite';
	return (
		<FadeIn>
			<a href="default.asp" target="_blank" className="project-link">
				<article className="project-container">
					<h3>{name}</h3>
					<div className="info-overlay">
						<ul>Built with: {tech}</ul>
						<p>Test Suite: {testSuite}</p>
						<p>{dateCompleted}</p>
					</div>
				</article>
			</a>
		</FadeIn>
	);
};

export default ProjectLink;
