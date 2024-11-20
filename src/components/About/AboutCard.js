import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Claire Li</span>, an undergrad 
            at UCLA double majoring in <span className="purple"> Computer Science and Engineering </span>
            and  <span className="purple"> Cognitive Science.</span>
            <br />
            <br />
            I grew up as an LA native, originally from the San Gabriel Valley area.
            Professionally, I hope to explore product management, product design,
            or consulting.
            Outside of school, I enjoy playing and listening to music, creating (art, baked goods, anything!) 
            and travelling around while also trying new food along the way.
            <br />
            <br />
            Feel free to reach out!
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
