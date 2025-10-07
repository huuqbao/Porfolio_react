import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I’m <span className="purple">Nguyen Huu Quoc Bao</span> from{" "}
            <span className="purple">Ho Chi Minh City, Vietnam</span>.
            <br />
            <br />
            I graduated with an <span className="purple">Engineer’s Degree in Information Technology</span> 
            from <span className="purple">Saigon University</span>, specializing in{" "}
            <span className="purple">Software Engineering</span>.
            <br />
            <br />
            Currently, I’m pursuing my career as a{" "}
            <span className="purple">Business Analyst</span>, where I focus on{" "}
            <b>understanding business needs, analyzing requirements, and turning ideas into actionable solutions</b>.
            <br />
            <br />
            Apart from work, I enjoy spending my time on:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing strategy and simulation games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and experiencing new cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music & podcasts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            "Keep learning, keep improving, and create meaningful impact."
          </p>
          <footer className="blockquote-footer">Bao Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
