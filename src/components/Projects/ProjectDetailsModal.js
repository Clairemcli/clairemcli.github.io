import React from "react";
import { Modal, Button } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

// The component receives 'show', 'onHide', and 'data' as props
function ProjectDetailsModal({ show, onHide, data }) {
  if (!data) return null; // Return null if no project data is provided

  const { title, description, images, link, buttonText } = data;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Slideshow component for project images */}
        <AwesomeSlider className="modal-slider">
          {images.map((image, index) => (
            <div key={index} data-src={image} />
          ))}
        </AwesomeSlider>

        {/* Project description */}
        <p className="modal-descrip" style={{ marginTop: "4em" }}>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        {/* Single customizable button */}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">{buttonText || "Learn More"}</Button>
          </a>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectDetailsModal;
