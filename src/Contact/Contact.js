import React from 'react';
import './Contact.css';

const Contact = () => {
	return (
		<section className="contact-form-container">
			<h2>Contact Me</h2>
			<form method="POST" action="http://formspree.io/david@beckersite.com">
				<input type="email" name="email" placeholder="Your email" />
				<textarea name="message" placeholder="Your message" />
				<button type="submit">Send</button>
			</form>
		</section>
	);
};

export default Contact;
