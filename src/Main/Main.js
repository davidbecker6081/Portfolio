import React from 'react';
import './Main.css';
import FadeIn from 'react-fade-in';

const Main = () => {

	return (
		<FadeIn>
			<section className="main-container">
				<div className="main-txt">
					<p className="main-heading">DAVID BECKER.</p>
					<p>Front-End <span className="main-highlight">  Developer.</span></p>
					<p><span className="main-highlight">Climber.</span> Designer.</p>
					<p>Architecture Enthusiast.<span className="main-highlight"> Musician.</span></p>
					<p><span className="main-highlight">Excited to learn.</span></p>
				</div>
				<div src="/" alt="image here" className="main-photo"/>
			</section>
		</FadeIn>
	);
};

export default Main;

//I am a passionate and hardworking individual in everything I do. With a strong and well- rounded foundation in Web Application and Test-Driven Development, I believe I can navigate any challenging situation.
// <br/>
// <br/>
// A background in Architecture and Design allows me to solve problems with logic and creativity.
// <br/>
// <br/>
// Other skillsets include communication, flexibility and efficiency but my true skillset lies in learning and adapting quickly without sacrificing quality.
