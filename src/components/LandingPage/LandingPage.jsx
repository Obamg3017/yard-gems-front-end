import React from "react";
import './landing-page.css';


const LandingPage = () => {
  const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", /* and so on for all 50 states */];

  return (
    <div>

      <h1>Welcome to Our Application</h1>
      <p>"Everyone on the internet is your neighbor."</p>
      
      <ul className="state-list">
        {states.map(state => <li key={state}>{state}</li>)}
      </ul>

      

      {/* Additional content can go here */}
      <div className="additional-content">
        <p>Explore more about our services.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default LandingPage;
