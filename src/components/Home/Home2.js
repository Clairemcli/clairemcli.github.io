import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  // AiOutlineTwitter,
  // AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";

function Home2() {
  const navigate = useNavigate(); // Correct naming for useNavigate
  console.log("Home component mounted");

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Container className="home2-header">
      <Row>
        <Col md={7} className="home-header">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="heading-name">
            I'm
            <strong className="main-name"> Claire Li</strong>
          </h1>

          <div style={{ padding: 50, textAlign: "left" }}>
            <Type />
          </div>
          
          <div className="header-buttons">
            <Button
              className="m-2"
              style={{
                padding: "10px 20px",         // Custom padding
                fontSize: "16px",         // Font size
              }}
              onClick={() =>  navigate("/about")}
            >
              About
            </Button>
             {/* Use navigate function instead of setting state */}
          <Button
            variant="primary"
            className="m-2"
            style={{
              padding: "10px 20px",         // Custom padding
              fontSize: "16px",             // Font size
            }}
            onClick={() => {
              console.log("Button clicked, navigating to /project");
              navigate("/project");
            }}
          >
            Projects
          </Button>
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

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
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
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              {/* </li>
              <li className="social-icons"> {/* CHANGE TO EMAIL }
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row> 
      </Container>
    </Container>
  );
}
export default Home2;
