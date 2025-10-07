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
              I’m <b className="purple">Nguyen Huu Quoc Bao</b>, a Software Engineering graduate from 
              <b className="purple"> Saigon University</b> who is now pursuing a career as a 
              <b className="purple"> Business Analyst</b>.  
              <br />
              <br />
              I’m passionate about understanding business problems, analyzing requirements, 
              and helping teams turn ideas into clear, actionable technical solutions.  
              My goal is to bridge the gap between business goals and technology, ensuring 
              that every product delivers real value to users. 
              <br />
              <br />
              <b>Core Skills:</b>
              <br />📝 <b className="purple">Requirement Analysis & Documentation:</b> 
              User Stories, Use Cases, BFD, DFD, Activity Diagrams
              <br />🎨 <b className="purple">Product Design Support:</b> 
              Wireframes, Mockups, Prototypes (Figma)
              <br />📊 <b className="purple">Data & Tools:</b> 
              SQL (basic), Excel / Google Sheets
              <br />
              <br />
              <b>What I Can Do:</b>
              <br />✅ Gather and validate requirements through{" "}
              <b className="purple">interviews, surveys, and workshops</b>.
              <br />✅ Translate business needs into{" "}
              <b className="purple">clear, structured specifications</b> for developers.
              <br />✅ Support in{" "}
              <b className="purple">workflow design, prototypes, and user journeys</b>.
              <br />✅ Analyze data to generate{" "}
              <b className="purple">insights for business decision-making</b>.
              <br />✅ Bridge communication between{" "}
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