import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="WatchStore"
              description="Developed a single-page e-commerce application for selling watches using Angular for the frontend and ASP.NET for the backend. Implemented RESTful APIs for product management, user authentication, and order processing, using JWT for secure login. Integrated VNPay payment gateway and used Entity Framework Core for database management with Microsoft SQL Server. Tested and documented APIs with Swagger for clear integration."
              ghLink="https://github.com/baongne/WatchStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Train Booking"
              description="Developed a web-based train ticket booking system using Thymeleaf for the frontend and Spring Boot for the backend. Implemented RESTful APIs for managing train schedules, user authentication, and ticket booking, with JWT for secure login and role-based access control. Used JPA with Hibernate for database interactions in MySQL, following the Code-First approach. Integrated VNPay payment gateway and tested APIs using Postman for functionality and performance."
              ghLink="https://github.com/baongne/easy-buy"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tour Management"
              description="This is a tour management website written in Java programming language, without using any frameworks, purely written in Java, with full features such as add, delete, edit, search, statistics, etc."
              ghLink="https://github.com/baongne/QuanLyTourDuLich"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
