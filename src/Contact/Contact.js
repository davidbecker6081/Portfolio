import React from 'react';
import './Contact.css';
import FadeIn from 'react-fade-in';

const Contact = () => {
	return (
		<FadeIn>
			<section className="contact-form-container">
				<h2>Contact Me</h2>
				<form method="POST" action="http://formspree.io/david@beckersite.com">
					<input type="email" name="email" placeholder="Your email" />
					<input type="text" name="subject" placeholder="Subject" />
					<textarea name="message" placeholder="Your message" />
					<input type="submit" value="Send" />
				</form>
				<a className="resume" href="../assets/ResumeDavidBecker2web.pdf">Resume</a>
				<p className="email-contact">david@beckersite.com</p>
			</section>
		</FadeIn>
	);
};

export default Contact;
