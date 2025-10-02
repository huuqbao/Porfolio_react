import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nguyen Huu Quoc Bao </span>
            from <span className="purple">Ho Chi Minh City, Vietnam.</span>
            <br />
            <br />
            I have graduated with an <span className="purple">Engineer’s Degree in Information Technology</span> 
            from Saigon University, specializing in <span className="purple">Software Engineering</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Bao Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
