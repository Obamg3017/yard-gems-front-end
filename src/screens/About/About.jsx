import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import femiPicture from "../../../src/assets/About/Femi.png";
import jonathanPicture from "../../../src/assets/About/Jonathan.png";
import roseveltPicture from "../../../src/assets/About/Rosevelt.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="main-div">
      <h1>About US!</h1>
      <h2>Hi There!</h2>
      <p>
        Welcome to Yard 💎, where we turn your everyday yard sale into a virtual
        treasure hunt! We’re a quirky bunch of garage sale enthusiasts who
        believe that one person’s “meh” is another person’s “must-have.” Whether
        it’s a vintage lamp, a forgotten vinyl, or that quirky garden gnome you
        didn’t know you needed, we’re here to make sure it finds a new home. Our
        mission is simple: to connect buyers and sellers in a fun, easy, and
        engaging way. With Yard 💎, you can pin your garage sale on the map,
        list your hidden 💎's, and let buyers discover the treasures waiting
        just around the corner. It’s like your neighborhood yard sale, but with
        a digital twist! Why let your unused items gather dust when they could
        be someone else’s new favorite find? We believe in the joy of
        discovering something unique and in the satisfaction of giving old items
        new life. So, why not join our community of treasure hunters and
        sellers? Whether you're here to declutter or to uncover that perfect
        piece, Yard 💎 is the place for you. Dive into the world of virtual yard
        sales, and let the treasure hunting begin!
      </p>
      <h1>MEET THE TEAM</h1>
      <div className="about-container">
        <div className="team-member">
          <img
            className="about-img"
            src={jonathanPicture}
            alt="Jonathan Coffen"
          />
          <div className="team-info">
            <h3>Jonathan Coffen</h3>
            <p>
              Jonathan Coffen is a hobbyist software engineer with an extensive
              background in the film industry as an ETC EOS lighting console
              programmer. Specializing in vanilla JS and Node.js, he has an
              interest in creating powerful, intuitive user interfaces powered
              by a robust backend. In the film industry he leverages bleeding
              edge technologies to improve human-computer interaction in order
              to streamline the on-set lighting experience. Jonathan is
              passionate about understanding technology's impact on our lives
              and continuously explores the philosophical challenges of leading
              a healthy, balanced life in a rapidly changing world.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/JohnnyMilkshakes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-coffen-70275a29a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="team-member">
          <img
            className="about-img"
            src={femiPicture}
            alt="Olorunfemi Bamgbose"
          />
          <div className="team-info">
            <h3>Olorunfemi Bamgbose</h3>
            <p>
              Femi is a problem solver at heart with a background in
              underwriting that has deeply influenced his journey as a software
              developer. His passion lies in tackling complex challenges with
              dedication and resilience, which he has honed through experience
              in team collaboration and developing insurance applications. Femi
              is committed to continuous growth, always seeking out new
              technologies and methodologies to enhance his skills. Outside of
              coding, he is an avid sports enthusiast, finding joy in activities
              like biking, hiking, and anything that offers adventure. Whether
              debugging a tough issue or navigating a mountain trail, Femi
              brings the same level of adaptability and problem-solving to every
              challenge. Every obstacle is a chance to grow, and he is eager to
              keep pushing the boundaries of what's possible.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/Obamg3017"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="http://www.linkedin.com/in/olorunfemi-bamgbose"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="team-member">
          <img
            className="about-img"
            src={roseveltPicture}
            alt="Rosevelt Foushee"
          />
          <div className="team-info">
            <h3>Rosevelt Foushee</h3>
            <p>
              Rosevelt Foushee is an emerging software developer with a
              background in electrical technology. Hailing from Washington DC,
              he approaches the tech world with a unique blend of innovation and
              commitment. He takes his time to fully grasp new concepts ensuring
              a solid understanding of the fundamentals, Rosevelt’s dedication
              to continuous learning drives him forward. Eager for new
              beginnings, he embraces each challenge as an opportunity to grow
              and contribute meaningfully to the tech community.
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/RF0510"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rosevelt-foushee-ba842a214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
