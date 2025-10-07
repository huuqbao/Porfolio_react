import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/BusinessAnalyst_NguyenHuuQuocBao.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* PDF Viewer only */}
        <Row className="resume justify-content-center">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_container_${index + 1}`}
                style={{
                  marginBottom: "30px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                }}
              >
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.4 : 0.6}
                />
              </div>
            ))}
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
