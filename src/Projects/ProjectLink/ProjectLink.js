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

	return (
		<FadeIn>
			<a href="default.asp" target="_blank" className="project-link">
				<article className="project-container">
					<h3>{name}</h3>
					<div className="info-overlay">
						<h4>{name}</h4>
						<div className="project-tech-container">
							Built with:
							<div className="project-tech">
								<ul>{tech}</ul>
								<p>{testing}</p>
							</div>
						</div>
						<p className="date-complete">
							Completed: <br />
							{dateCompleted}
						</p>
					</div>
				</article>
			</a>
		</FadeIn>
	);
};

export default ProjectLink;
