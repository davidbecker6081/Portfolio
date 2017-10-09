import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';

const AboutMe = ({ props, checkCurrentPage }) => {
	checkCurrentPage(props.location.pathname)
	return (
		<section className="about-me-container">
			<p className="about-me-text">Who am I, you ask? Let me tell you all about ME.</p>

			<p className="about-me-text">Born in the Memphis Mud, I grew up playing and appreciating the southern soul that is Memphis music. It has shaped my life and personality in many different ways. When I was a youngster, much of my days were heavily consumed by equestrian and music. I competed extensively in Show Jumping from an early age of 6 to the end of high school. I also started playing piano when I was young, eventually picking up the bass guitar and upright bass. These formative years taught me to be self-sufficient and disciplined, learn the art of practice, and to work hard for what I wanted.</p>

			<p className="about-me-text">When it was time, I moved to NYC to attend the New School of Jazz and Contemporary Music, but I quickly found out that NYC was not the right place for me. I packed my bags and moved to a place where I could play in the mountains and attend a school more suited to my learning style and personality, Colorado College. There I completed my Bachelor’s in Sustainable Design, a major I composed myself. While at school, I started rock climbing and it has become a major passion of mine. I also played in many bands of all genres, continuing to develop my craft.</p>

			<p className="about-me-text">After graduating, I took off and explored. I lived in many places including a tent in a climbing area in Kentucky for 6 months and then the crazy city of Los Angeles, working for a high-end residential architectural firm. I then realized I needed something more than architecture, a field that could challenge me with new problems and engage my logical and creative sides . So when I moved back to Denver in February of 2017, I started looking for something else.</p>

			<p className="about-me-text">Web and Software development are the perfect combination and culmination of me. With my background in music and architecture, I develop with a unique perspective; It helps me solve problems in creative ways. A skill I have developed in both my musical and climbing careers, the process of learning new things, going from utter confusion to deep understanding, is what attracts me most about development. This practice drives everything I do. I consider myself highly adaptable because of it.</p>

			<p className="about-me-text">Currently, I’m finishing up my final 6-week module out of 4 in the Front-End Engineering program at Turing School of Software and Design. Turing has re-shaped who I am and made me better for it in all areas of life. While I keep my head above water, absorbing everything I can about code, I am also working with my band, Mad Wallace, to produce an EP and make a name for ourselves in Denver. Check us out here:
				<a className="about-me-link" href="http://madwallace.com/" target="_blank">Mad Wallace</a>.
					Want to know more?
				<Link to="/contact" className="about-me-link">Contact Me</Link>
			</p>
		</section>
	);
};

export default AboutMe;
