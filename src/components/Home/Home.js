import React from "react";
//import { Container, Row, Col } from "react-bootstrap";
//import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
//import Type from "./Type";
//import Button from "react-bootstrap/Button";
//import { Link, useNavigate } from "react-router-dom";

function Home() {
  //const navigate = useNavigate(); // Correct naming for useNavigate
  console.log("Home component mounted");

  
  return (

    <section className="home-page">
      {/* <Container fluid className="home-section" id="home">
        <Container className="home-content">
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

              <Link to="/about">
                <Button variant="primary" className="m-2">
                  About
                </Button>
              </Link>
              
              {/* Use navigate function instead of setting state */}
              {/* <Button
                variant="secondary"
                className="m-2"
                style={{
                  padding: "10px 20px",         // Custom padding
                  fontSize: "16px",             // Font size
                  zindex: 25,
                }}
                onClick={() => {
                  console.log("Button clicked, navigating to /project");
                  navigate("/project");
                }}
              >
                Projects
              </Button>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container> */} 
      <Home2 />
    </section>
  );
}

export default Home;
