import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
// import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js";

// import SectionDivider from "../SectionDivider";


function Home2() {
  // const navigate = useNavigate(); // Correct naming for useNavigate
  console.log("Home component mounted");

  return (
    <section id="home">
    <Container fluid className="home-about-section">
      <Container>
      <Container className="home2-header">
      <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi there!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Claire Li</strong>
          </h1>

          <div style={{ padding: "50px 50px 50px 50px", textAlign: "left" }} className="typewriter-container">
            <Type />
          </div>
    
          
          {/* Social Icons */}
          <div className="social-icons" style={{ 
            paddingLeft: "50px",
            display: "flex"
          }}>
            <a
                href="https://www.linkedin.com/in/claire-m-li"
                style={{ color: "var(--light-purple)", marginRight: "30px", fontSize: "42px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Clairemcli"
                style={{ color: "var(--light-purple)", marginRight: "30px", fontSize: "42px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="mailto:clairemcli@ucla.edu"
                style={{ color: "var(--light-purple)", marginRight: "30px", fontSize: "42px" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
        
          </div>
          
        </Col>

        <Col md={5} style={{ paddingBottom: 40 }}>
          <img
            src={homeLogo}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "500px", 
              verticalAlign: "bottom" 
            }}
          />
        </Col>
      </Row>
      </Container>

      {/* Simple thin divider */}
      {/* <SectionDivider /> */}

      {/* Add About section directly below hero */}
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      </Container>
    </Container>
    </section>
  );
}
export default Home2;
