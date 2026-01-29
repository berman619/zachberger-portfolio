// Contains a contact form with fields for name, email, and a message.

import React, { useState } from 'react';
import '../styles/Contact.css';
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }

    const emailReg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailReg.test(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch("https://formspree.io/f/xpzgpwey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name, email, message }),
        redirect: 'manual'
      });
    
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(true);
      } else {
        setErrorMessage("An error occurred while sending your message. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending your message. Please try again later.");
      console.error(error);
    }
  };

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="introduction">
                <h2>Contact me!</h2>
                <p>Fill out the form below and I'll get back you ASAP.</p>
            </div>
      <div className="container">
        {formSubmitted ? (
          <motion.div
            className="success-message"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thank you for contacting me! I'll get back to you as soon as possible.
          </motion.div>
        ) : (
          <form id="contactForm" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-text">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      )}
    </div>
  </motion.div>
);
}

export default Contact;