import React from 'react';
import './ProjectLink.css';
import FadeIn from 'react-fade-in';
import ImageLoader from 'react-imageloader';

const ProjectLink = ({
	name,
	gitHub,
	imageUrl,
	technologies,
	testing,
	dateCompleted,
	liveLink,
	about
}) => {
	const tech = technologies.map((tech, i) => <span className="tech-used" key={i}>{tech}, </span>);
	const live = liveLink ? liveLink : gitHub;
	return (
		<FadeIn>
			<div className="project-link">
				<article className="project-container">
					<ImageLoader className="project-image" src={imageUrl} />
					<h3>{name}</h3>
					<a className="project-live-link" href={gitHub} target="_blank">
						GitHub
					</a>
					{liveLink !== '' && <a className="project-live-link" href={live} target="_blank">
						Live
					</a>}
					<p className="about">{about}</p>
					<div className="project-tech-container">
						<div className="project-tech">
							<p>Tech used: {tech}</p>
							<p>Testing done with: <span className="tech-used">{testing}</span></p>
						</div>
					</div>
				</article>
			</div>
		</FadeIn>
	);
};

export default ProjectLink;
