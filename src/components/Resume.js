// Resume component
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ResumeImg from "../images/resume.PNG";
import ResumePdf from "../pdf/andrewvenson_resume.pdf";

const Resume = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <span onClick={() => setLgShow(true)}>
        <img
          className="resume"
          src={ResumeImg}
          style={{
            width: "50px",
            height: "50px",
            filter: "drop-shadow(12px 12px 25px rgba(0,0,0,0.5))",
            borderRadius: "5px",
          }}
          alt="Resume"
        />
      </span>

      {/* React Bootstrap modal shows resume on click */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Button
            href={ResumePdf}
            style={{
              backgroundColor: "purple",
              borderColor: "purple",
              boxShadow: "3px 7px 8px lightgray",
            }}
          >
            Show as PDF
          </Button>
        </Modal.Header>
        <Modal.Body>
          <img src={ResumeImg} style={{ width: "100%" }} alt="Resume" />
          {/* <Document file={ResumePdf} /> */}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Resume;
