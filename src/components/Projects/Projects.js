import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import quantumviz from "../../Assets/Projects1/quantumviz.png";
import gohelpme from "../../Assets/Projects1/gohelpme.png";
import janus from "../../Assets/Projects1/janus.png";
import nvgaze from "../../Assets/Projects1/nvgaze.png";
import reputacheck from "../../Assets/Projects1/reputacheck.png";
import car from "../../Assets/Projects1/car.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "#4A4774" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* LA Wildfire Relief */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <h4 className="project-title">LA Wildfire Relief</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2025</span>
              </div>
              <p className="project-description">
                Insurance support and receipt itemization tool to assist households affected by the 2025 LA Wildfires in managing claims.
              </p>
              <img src={janus} alt="Fire Relief" className="project-picture-bottom" />
            </div>
          </Col>

          {/* QuantumViz */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <img src={quantumviz} alt="QuantumViz" className="project-picture-top" />
              <h4 className="project-title">QuantumViz</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
                Quantum circuit designer using LLM, RAG, and a web surfer that converts arXiv diagrams to IBM Qiskit code.
              </p>
            </div>
          </Col>

          {/* GoHelpMe */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <h4 className="project-title">GoHelpMe</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
              GoHelpMe is a full stack web application that connects users interested in volunteering with those who are trying to organize events.
              </p>
              <img src={gohelpme} alt="GoHelpMe" className="project-picture-bottom" />
            </div>
          </Col>

          {/* Bruin AI Website */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <h4 className="project-title">Gaze Estimator</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
                Gaze estimation model trained on NVIDIA's NVGaze dataset for predicting 3D eye-gaze vectors using deep convolutional networks.
              </p>
              <img src={nvgaze} alt="Gaze Estimator" className="project-picture-bottom" />
            </div>
          </Col>

          {/* Path Following Car */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <img src={car} alt="PID Car" className="project-picture-top" />
              <h4 className="project-title">Autonomous PID Car</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2024</span>
              </div>
              <p className="project-description">
                Arduino-based car using PID control to autonomously navigate complex racetracks through iterative tuning and sensor fusion.
              </p>
            </div>
          </Col>

          {/* Reputation Check */}
          <Col xs={12} md={6} lg={4} className="project-card">
            <div className="project-card-div" style={{ backgroundColor: "var(--bg)", color: "var(--dark-purple)" }}>
              <h4 className="project-title">ReputaCheck</h4>
              <div className="project-year-container">
                <hr className="project-divider" />
                <span className="project-year">2023</span>
              </div>
              <p className="project-description">
                NLP-driven tool that analyzes company reviews to assess culture, leadership, and reputation for job seekers.
              </p>
              <img src={reputacheck} alt="ReputaCheck" className="project-picture-bottom" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
