import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import NavHeader from './NavHeader/NavHeader';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

class App extends Component {
	constructor() {
		super()
		this.state = {
			currentPage: '/',
		}
	}

	checkCurrentPage(location) {
		// console.log(this.state.currentPage === location)
		if (this.state.currentPage !== location) {
			this.setState({
				currentPage: location
			})
		}
	}

	render() {
		return (
			<div className="App">
				<NavHeader currentPage={this.state.currentPage} />
				<main>
					<Route
						exact
						path="/"
						render={props => (
							<div>
								<Main
									props={props}
									checkCurrentPage={this.checkCurrentPage.bind(this)}
								/>
							</div>
						)}
					/>
					<Route
						exact
						path="/projects"
						render={props => (
							<div>
								<Projects
									props={props}
									checkCurrentPage={this.checkCurrentPage.bind(this)}
								/>
							</div>
						)}
					/>
					<Route
						exact
						path="/about-me"
						render={props => (
							<div>
								<AboutMe
									props={props}
									checkCurrentPage={this.checkCurrentPage.bind(this)}
								/>
							</div>
						)}
					/>
					<Route
						exact
						path="/contact"
						render={props => (
							<div>
								<Contact
									props={props}
									checkCurrentPage={this.checkCurrentPage.bind(this)}
								/>
							</div>
						)}
					/>
				</main>
			</div>
		);
	}
}

export default App;
