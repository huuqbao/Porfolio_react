import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently, including both{" "}
          <strong className="purple">software development</strong> and{" "}
          <strong className="purple">business analysis</strong>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* ================= Development Projects ================= */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="WatchStore"
              description="Single-page e-commerce application for selling watches using Angular (frontend) and ASP.NET (backend). Features: RESTful APIs, JWT authentication, VNPay integration, Swagger API docs."
              ghLink="https://github.com/huuqbao/ASP.NET_WatchStore"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Train Booking"
              description="Web-based train ticket booking system with Spring Boot & Thymeleaf. Includes secure JWT login, RESTful APIs, VNPay integration, MySQL database (JPA Hibernate)."
              ghLink="https://github.com/huuqbao/Train_Booking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Tour Management"
              description="Tour management website written purely in Java (no frameworks). Supports add, edit, delete, search, and statistical features."
              ghLink="https://github.com/huuqbao/Tour_Management"
            />
          </Col>

          {/* ================= Business Analyst Projects ================= */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Movie Ticket Booking App"
              description="Designed UI wireframes and user flows in Figma. Created functional requirement docs and use cases in Google Docs."
              designLink="https://www.figma.com/design/AoLXXgqGDnQjHjkTMNon3b/BDTCinema?node-id=0-1&t=QCO9ahKrxlfHegs0-1"
              docLink="https://docs.google.com/document/d/1cgxXl3R9CGfxkfwPSJwftiDr_H13tHlRy8cFmt3X_PQ/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="Restaurant Management System - Software Testing"
              description="Developed SRS and RTM, designed & executed test cases and scenarios. Applied Black-box, White-box, boundary value and equivalence testing. Automated unit tests with JUnit."
              docLink="https://docs.google.com/document/d/11oNLUJzwutSuTNyQdy5o2-om2b0RnOhiSpUkAwKBkcs/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Student Internship & Course Registration System"
              description="Analyzed workflows, created ERD, Use Case, Sequence & Class diagrams. Built UI wireframes and testing docs. Covered login, registration, internship, and course management modules."
              docLink="https://docs.google.com/document/d/16OVm7-oq-G9x0Po19L1CUQqNXDXd3dFLrUKMvDh69Zg/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="E-commerce ERP Optimization with Odoo"
              description="Researched Odoo ERP, defined requirements for sales process optimization. Designed BFD, DFD, Use Case & Activity diagrams. Configured Odoo modules (CRM, Inventory, Payments, etc.)."
              docLink="https://docs.google.com/document/d/1qGsTV8qVUCQvXXGqvU131bfHi2Cbc299PSm3LYlrZHg/edit?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
