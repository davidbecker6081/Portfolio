import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section className="contact-form-container">
			<h2>Contact Me</h2>
			<form method="POST" action="http://formspree.io/david@beckersite.com">
				<input type="email" name="email" placeholder="Your email" />
				<input type="text" name="subject" placeholder="Subject" />
				<textarea name="message" placeholder="Your message" />
				<input type="submit" value="Send" />
			</form>
		</section>
	);
};

export default Contact;
