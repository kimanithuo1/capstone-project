import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-bold">Contact Afriflix</h2>
      <p className="mt-4 text-lg">Feel free to reach out for any inquiries!</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-2 m-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="p-2 m-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          required
          className="p-2 m-2 border border-gray-300 rounded"
          rows="4"
        />
        <button type="submit" className="btn mt-4">
          Send Message
        </button>
      </form>
      <p className="mt-2">Email: support@afriflix.com</p>
    </div>
  );
};

export default ContactPage;