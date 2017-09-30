import React from 'react';
import './ProjectLink.css';
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
	openNewPage,
}) => {
	const tech = technologies.map((tech, i) => <li key={i}>{tech}</li>);
	return (
		<article
			className="project-container"
			onClick={() => {
				openNewPage(gitHub);
			}}
		>
			<h3>{name}</h3>
			<p>{imageUrl}</p>
			<ul>{tech}</ul>
			<p>{dateCompleted}</p>
		</article>
	);
};

export default ProjectLink;
