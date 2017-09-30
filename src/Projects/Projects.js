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
		return <section>{this.renderProjects()}</section>;
	}
}

export default Projects;
