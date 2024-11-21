import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectDetailsModal from "./ProjectDetailsModal";
import quantumviz from "../../Assets/Projects/quantumviz.png";
import quantumviz1 from "../../Assets/Projects/quantumviz1.png";
import quantumviz2 from "../../Assets/Projects/quantumviz2.png";
import quantumviz3 from "../../Assets/Projects/quantumviz3.png";
import quantumviz4 from "../../Assets/Projects/quantumviz4.png";
import gohelpme from "../../Assets/Projects/gohelpme.png";
import bruinai from "../../Assets/Projects/bruinai.png";

function Projects() {
  // State to manage modal visibility and selected project data
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle project card click
  const handleCardClick = (projectData) => {
    setSelectedProject(projectData); // Set selected project data
    setModalShow(true); // Show the modal
  };

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "#4A4774" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantumviz}
              isBlog={false}
              title="QuantumViz"
              description="Quantum circuit designer using LLM, RAG, and automatic web surfer that scrapes circuit diagrams off papers on arXiv and converts them to IBM Qiskit code."
              onClick={() =>
                handleCardClick({
                  title: "QuantumViz",
                  description: "Quantum circuit designer using LLM, RAG, and automatic web surfer that scrapes circuit diagrams off papers on arXiv and converts them to IBM Qiskit code.",
                  images: [quantumviz,quantumviz1,quantumviz2,quantumviz3,quantumviz4], // Add more images if available
                })
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gohelpme}
              isBlog={false}
              title="GoHelpMe"
              description="GoHelpMe is a full stack web application that connects users interested in volunteering with those who are trying to organize events."
              onClick={() =>
                handleCardClick({
                  title: "GoHelpMe",
                  description: "GoHelpMe is a full stack web application that connects users interested in volunteering with those who are trying to organize events.",
                  images: [gohelpme],
                  buttonText: "Github",
                  link: "https://github.com/fahimWad/GoHelpMe",
                })
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bruinai}
              isBlog={false}
              title="Bruin AI Website"
              description="Web design for Bruin AI, a leading AI club at UCLA that works with industry leaders on AI and consulting projects."
              onClick={() =>
                handleCardClick({
                  title: "Bruin AI Website",
                  description: "Web design for Bruin AI, a leading AI club at UCLA that works with industry leaders on AI and consulting projects.",
                  images: [bruinai],
                  buttonText: "Visit",
                  link: "https://www.bruinai.org/",
                })
              }
            />
          </Col>
        </Row>

        {/* Render the modal */}
        {selectedProject && (
          <ProjectDetailsModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={selectedProject}
          />
        )}
      </Container>
    </Container>
  );
}

export default Projects;
