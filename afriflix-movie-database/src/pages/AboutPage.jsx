import React from "react";

const AboutPage = () => {
  return (
    <div className="about p-8 text-yellow-400">
      <h1 className="text-4xl font-bold text-center mb-8">About Afriflix</h1>
      <p className="text-lg text-gray-300 mb-6">
        Afriflix is your gateway to the rich and vibrant world of African cinema. Our platform offers:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        <li>Access to a vast collection of African movies and TV shows.</li>
        <li>Exclusive content from emerging and established African filmmakers.</li>
        <li>Personalized recommendations based on your viewing preferences.</li>
        <li>Community features to connect with other film enthusiasts.</li>
        <li>Regular updates on new releases and trending films.</li>
      </ul>

      <h2 className="text-3xl font-bold text-yellow-400 mb-4">Join Us</h2>
      <p className="text-lg text-gray-300 mb-6">
        Become a part of our growing community! Share your thoughts, reviews, and connect with fellow movie lovers.
      </p>

      <h3 className="text-2xl font-bold text-yellow-400 mb-4">Contact Us</h3>
      <p className="text-lg text-gray-300 mb-6">
        If you have any questions or suggestions, feel free to reach out:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-8">
        <li>Email: <a href="mailto:jkimanithuo@gmail.com" className="text-yellow-400">jkimanithuo@gmail.com</a></li>
        <li>Phone: +254 728 284 816 </li>
        <li>Follow us on social media for the latest updates!</li>
      </ul>
    </div>
  );
};

export default AboutPage;