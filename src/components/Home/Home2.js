import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/bao.jpg";
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
            I am a fourth-year Software Engineering student at Saigon University. 
            I aspire to be a full-stack developer. 
            I focus on building scalable, high-performance web applications with clean architecture and best practices. 🤷‍♂️
              <br />
              <br />Tech Stack:
              <br />🌐 Frontend:
              <i>
                <b className="purple">  Angular </b>
              </i> 
              <br />⚙️ Backend:
              <i>
                <b className="purple">  Spring Boot, ASP.NET Core, Laravel </b>
              </i>
              <br />
              <br />What I Can Do:
              <br />✅ Develop dynamic and responsive UIs with&nbsp;
              <i>
                <b className="purple">Angular </b> 
              </i>
              <br />✅ Build robust, secure, and scalable&nbsp;
              <i>
                <b className="purple">APIs</b> using{" "}
                <b className="purple">
                Spring Boot, ASP.NET Core, Laravel
                </b>
              </i>

              <br />✅ Ensure seamless integration between frontend and backend systems&nbsp;
              
              <br />✅ Continuously learn and explore new technologies to improve performance&nbsp;
              
              <br />
              <br />
              
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
                  href="https://github.com/baongne"
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
