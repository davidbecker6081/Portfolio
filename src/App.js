import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import NavHeader from './NavHeader/NavHeader';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavHeader />
				<main>
					<Route exact path="/" component={Main} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/about-me" component={AboutMe} />
					<Route exact path="/contact" component={Contact} />
				</main>
			</div>
		);
	}
}

export default App;
