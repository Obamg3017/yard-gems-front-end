import React, { useEffect, useRef } from "react"
import './landing-page.css';

const LandingPage = () => {
  const videoRef = useRef(null);
  const belowTextRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current
    let playCount = 0

    const handleVideoEnd = () => {
      playCount++;
      if (playCount < 3) {
        videoElement.play()
      }
    };

    
    const handleFadeInOutText = () => {
      belowTextRef.current.classList.add("fade-in-out");
    };

    videoElement.addEventListener('ended', handleVideoEnd);
    handleFadeInOutText() 

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="landing-page">
      
      <video
        ref={videoRef}
        className="full-width-video"
        autoPlay
        muted
        playsInline
      >
        <source src="https://storage.googleapis.com/yardgems/yard-gems-final%20(2).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      
      <div className="content-section">
        <h1>Welcome to Yard 💎</h1>
        <p>"Everyone on the internet is your neighbor."</p>
        <p> Your one-stop destination to discover the best yard sales in your area!
          Whether you're hunting for hidden treasures, vintage finds, or just great bargains,
          you've come to the right place.
        </p>

        <h1>How It Works</h1>
        <p>Browse upcoming yard sales in your neighborhood or create your own listing to attract shoppers.
          Find directions, dates, and details all in one place!</p>

        <h1>Featured Yard Sales This Week</h1>
        <p>Check out some of the top yard sales happening near you. Find great deals on
          furniture, clothes, electronics, collectibles, and more!</p>
        <h1>Why Choose Yard Gems</h1>
        <p>Yard Gems makes finding and hosting yard sales easier than ever.
          With our interactive map, customizable listings, and user-friendly interface,
          you'll never miss a sale again</p>
        <h1>Join the Community</h1>
        <p>Become a part of our growing community of sellers and shoppers.
          List your yard sale today or browse sales near you!</p>
        <h1>Hear from Our Users</h1>
        <p>I found amazing deals at a sale just a block away!’ – Sarah, Brooklyn, NY.
          ‘Setting up my yard sale was quick and easy, and I got more foot traffic than ever!’ – John, Austin, TX</p>

      </div>

      
      <div className="below-video">
        <video
          className="below-video-element"
          muted
          autoPlay
          loop
        >
          <source src="https://storage.googleapis.com/yardgems/Yard-gems-rotate2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="fade-in-out-text" ref={belowTextRef}>
          This has nothing to do with our App, Just thought it was cool.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
