import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    alert(`Thank you for contacting us, ${name}! We will get back to you at ${email} regarding your message: ${message}`);
  };

  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8">Contact Afriflix</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <p className="mt-2 text-lg text-gray-300">Email: <a href="mailto:jkimanithuo@gmail.com" className="text-yellow-400">jkimanithuo@gmail.com</a></p>
    </div>
  );
};

export default ContactPage;