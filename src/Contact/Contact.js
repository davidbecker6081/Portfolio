import React from 'react';
import './Contact.css';
// import { Link } from 'react-router-dom';

const Contact = () => {
	return (
    <section className="contact-form-container">
      test contact
      <form method="POST" action="http://formspree.io/david@beckersite.com">
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Your message" />
        <button type="submit">Send</button>
      </form>
    </section>
  )
};

export default Contact;
