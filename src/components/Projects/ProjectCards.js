import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileWord } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function ProjectCard({ imgPath, title, description, ghLink, docLink, designLink, otherLink }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {/* GitHub */}
        {ghLink && (
          <Button variant="primary" href={ghLink} target="_blank" className="m-1">
            <AiFillGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Word/Docs */}
        {docLink && (
          <Button variant="primary" href={docLink} target="_blank" className="m-1">
            <AiOutlineFileWord /> &nbsp; Document
          </Button>
        )}

        {/* Figma */}
        {designLink && (
          <Button variant="primary" href={designLink} target="_blank" className="m-1">
            <FaFigma /> &nbsp; Figma
          </Button>
        )}

        {/* Other generic link */}
        {otherLink && (
          <Button variant="primary" href={otherLink} target="_blank" className="m-1">
            <AiOutlineLink /> &nbsp; Link
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
