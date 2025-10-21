import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import logo from "../Assets/logo.png";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
// import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handles "Home" nav click
  const handleHomeClick = () => {
    updateExpanded(false);
    if (location.pathname === "/") {
      scrollToSection("home");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("home"), 300);
    }
  };
  // Handles "Projects" nav click
  const handleProjectsClick = () => {
    updateExpanded(false);
    if (location.pathname === "/") {
      scrollToSection("projects");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("projects"), 300);
    }
  };

  // Handles "About" nav click
  const handleAboutClick = () => {
    updateExpanded(false);
    if (location.pathname === "/") {
      scrollToSection("about");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection("about"), 300);
    }
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Home */}
            <Nav.Item>
              <Nav.Link onClick={handleHomeClick}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link onClick={handleAboutClick}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}
            <Nav.Item>
              <Nav.Link onClick={handleProjectsClick}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            {/* GitHub Button */}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/clairemcli"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
