import React from 'react';
import './AboutMe.css';
import FadeIn from 'react-fade-in';
import circleCI from '../assets/circleci.png';
import expressLogo from '../assets/express.png';
import gitLogo from '../assets/git.png';
import htmlCSSJS from '../assets/html5-css-javascript-logos.png';
import jQueryLogo from '../assets/jquery-logo-png--800.gif';
import reduxLogo from '../assets/logo-redux.png';
import nodeLogo from '../assets/node.png';
import postgresLogo from '../assets/postgresql.png';
import reactLogo from '../assets/React.svg';
import webpackLogo from '../assets/webpack.png';

const AboutMe = () => {

	return (
		<FadeIn>
			<section className="about-me-container">
				<p className="about-me-title">Who am I, you ask?</p>

				<p className="about-me-text">I am a creative web and mobile developer.</p>
				<p className="about-me-text">I am a student of design thinking and architecture.</p>
				<p className="about-me-text">I am logical and adaptable.</p>
				<p className="about-me-text">I love solving problems and finding innovative solutions.</p>

			<p className="about-me-title">What tech I have experience using.</p>
					<div className="about-me-tech">
						<img src={htmlCSSJS} alt='html css javascript logo'/>
						<img src={jQueryLogo} alt='jquery logo'/>
						<img src={reactLogo} alt='react logo'/>
						<img src={reduxLogo} alt='redux logo'/>
						<img src={circleCI} alt='circle C I logo'/>
						<img src={nodeLogo} alt='node logo'/>
						<img src={expressLogo} alt='express logo'/>
						<img src={postgresLogo} alt='postgresQL logo'/>
						<img src={webpackLogo} alt='webpack logo'/>
						<img src={gitLogo} alt='git logo'/>
					</div>

				<p className="about-me-title">What I'm Looking For.</p>

				<p className="about-me-text">A team that is collaborative, creative, and engaged in continuous growth.</p>

				<p className="about-me-title">What is My Background.</p>

				<p className="about-me-text">Bachelor's Degree in Sustainable Design from Colorado College.</p>
				<p className="about-me-text">Certificate of Front-End Engineering from Turing School of Software & Design.</p>

				<p className="about-me-title">When I'm Not Coding.</p>

				<p className="about-me-text">You can find me rock climbing all around the world and adventuring in the outdoors.</p>
				<p className="about-me-text">You can find me playing music with my band, Mad Wallace. Check our demos here: <a className="about-me-link" href="https://soundcloud.com/mad-wallace" target="_blank" rel="noopener noreferrer">Mad Wallace</a>.</p>
				</section>
		</FadeIn>
	);
};

export default AboutMe;
