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
	render() {
		return (
			<div className="App">
				<NavHeader />
				<Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
			</div>
		);
	}
}

export default App;
