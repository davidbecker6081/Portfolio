import React from 'react';
import './AboutMe.css';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';

const AboutMe = () => {

	return (
		<FadeIn>
			<section className="about-me-container">
				<p className="about-me-title">Who am I, you ask? Let me tell you all about ME.</p>

				<p className="about-me-text">Web and Software development are the perfect combination and culmination of me. With my background in music and architecture, I develop with a unique perspective; It helps me solve problems in creative ways. Being a musician has taught me to be self-sufficient and disciplined, learn the art of practice, and to work hard for what I wanted. Architecture has taught me to be creative and logical at the same time, while learning every step of the way. I bring this adaptable mindset into my development.</p>

				<p className="about-me-title">What I'm Looking For.</p>

				<p className="about-me-text">A team that is collaborative, creative, and engaged in continuous growth. I strive in environments that challenge me to not only do my best, but also step out of my comfort zone. </p>

				<p className="about-me-title">What is My Background.</p>

				<p className="about-me-text">I received my Bachelor's in Sustainable Design at Colorado College. There I focused on the urban picture, working on ways to implement Behavioral and Environmental Design into the built environemnt. I also recieved a Certificate of Front-End Engineering from Turing School of Software & Design in Denver, CO.</p>

				<p className="about-me-title">When I'm Not Coding.</p>

				<p className="about-me-text">You can find me outside climbing anything and everything. My climbing career started 7 years ago and takes me to wild and adventurous places all around the world. You can also find me playing music with my band, Mad Wallace. We are currently working on an EP. Check our demos here: <a className="about-me-link" href="https://soundcloud.com/mad-wallace" target="_blank">Mad Wallace</a>.
					Want to know more?
					<Link to="/contact" className="about-me-link">Contact Me</Link></p>
				</section>
		</FadeIn>
	);
};

export default AboutMe;
