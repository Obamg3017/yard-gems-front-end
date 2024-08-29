// src/components/LandingPage/LandingPage.jsx
import React from "react";
import './landing-page.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="video-container">
        <iframe
          width="100%" // Set to 100% for full-width
          height="500px" // Adjust the height as needed
          src="https://www.youtube.com/embed/sb5mDyZMXU8?"// Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      <h1>Welcome to Our Application</h1>
      <p>"Everyone on the internet is your neighbor."</p>
      
      <ul className="state-list">
        {/* List of states goes here */}
      </ul>

      <div className="additional-content">
        <p>Explore more about our services.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default LandingPage;

      