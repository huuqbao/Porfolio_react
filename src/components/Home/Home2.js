import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/baonguyen.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a graduate Software Engineer from Saigon University, 
              now pursuing my career as a <b className="purple">Business Analyst</b>.  
              I am passionate about bridging the gap between business needs and technical solutions, 
              ensuring that digital products are aligned with both user requirements and organizational goals. 
              <br />
              <br />
              <b>Core Skills:</b>
              <br />📝 Requirement Analysis & Documentation: 
              <i>
                <b className="purple"> User Stories, Use Cases, BFD, DFD, Activity Diagrams </b>
              </i>
              <br />🎨 Product Design Support: 
              <i>
                <b className="purple"> Wireframes, Mockups (Figma) </b>
              </i>
              <br />📊 Data & Tools: 
              <i>
                <b className="purple"> SQL, Excel/Google Sheets</b>
              </i>
              <br />
              <br />
              <br />What I Can Do:
              <br />✅ Gather and validate business requirements through{" "}
              <b className="purple">interviews, surveys, and workshops</b>.
              <br />✅ Translate business needs into{" "}
              <b className="purple">clear specifications</b> for development teams.
              <br />✅ Support in{" "}
              <b className="purple">designing workflows, prototypes, and user journeys</b>.
              <br />✅ Analyze data and metrics to provide{" "}
              <b className="purple">insights for decision-making</b>.
              <br />✅ Facilitate communication between{" "}
              <b className="purple">stakeholders, developers, and QA teams</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/huuqbao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100041944703594"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/quocbao003/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hqbao_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;