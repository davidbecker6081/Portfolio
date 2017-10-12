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
	const styles = {
		backgroundImage: `url(${imageUrl})`
	}

	return (
		<FadeIn>
			<div className="project-link">
				<article className="project-container" style={styles}>
					<h3>{name}</h3>
					<div className="info-overlay">
						<h4>{name}</h4>
						<a className="project-live-link" href={gitHub} target="_blank">GitHub</a>
						<a className="project-live-link" href={gitHub} target="_blank">Live</a>
						<div className="project-tech-container">
							<div className="project-tech">
								<ul>{tech}</ul>
								<p>{testing}</p>
							</div>
						</div>
					</div>
				</article>
			</div>
		</FadeIn>
	);
};

export default ProjectLink;
