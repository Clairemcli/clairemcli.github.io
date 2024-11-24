import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 class-name="about-me" style={{ justifyContent: "left", fontSize: "2.1em", paddingBottom: "20px", paddingLeft: "15px" }}>
              About <strong className="purple"> Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "0px", paddingBottom: "50px", verticalAlign: "top", paddingLeft: "40px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
