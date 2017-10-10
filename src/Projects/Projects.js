import React, { Component } from 'react';
import './Projects.css';
import ProjectLink from './ProjectLink/ProjectLink';
import { getProjectData } from '../HelperData/helperProjects';
// import { Link } from 'react-router-dom';

class Projects extends Component {

	renderProjects() {
		const projectData = getProjectData();
		return projectData.map((project, i) => (
			<ProjectLink key={i} {...project} />
		));
	}

	render() {
		return (
			<div className="projects-wrapper">
				<h2>Code</h2>
				<section className="projects-display">
					{this.renderProjects()}
				</section>
			</div>
		);
	}
}

export default Projects;
