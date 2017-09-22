import React, { Component } from 'react';
import './Projects.css';
import ProjectLink from './ProjectLink/ProjectLink';
import { getProjectData } from '../HelperData/helperProjects';
// import { Link } from 'react-router-dom';

class Projects extends Component {
	constructor() {
		super();
		this.openNewPage = this.openNewPage.bind(this);
	}

	openNewPage(url) {
		//open url in new page
		console.log('open new page', url);
	}

	renderProjects() {
		const projectData = getProjectData();
		return projectData.map((project, i) => (
			<ProjectLink key={i} {...project} openNewPage={this.openNewPage} />
		));
	}

	render() {
		return <section>{this.renderProjects()}</section>;
	}
}

export default Projects;
