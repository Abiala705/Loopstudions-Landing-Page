import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Hamburger from "../../images/icon-hamburger.svg";
import Hamburger_Close from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import "./OffCanvas.css";

const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        className="d-md-none col-2 ms-auto bg-none border-none mt-3 hamb"
      >
        <img src={Hamburger} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title>
            <div href="#home" className="col-7 ps-2">
              <img src={logo} className="logo" />
            </div>
          </Offcanvas.Title>
          <Button
            variant="primary"
            onClick={handleClose}
            className="hamb d-md-none col-2 ms-auto bg-none border-none"
          >
            <img src={Hamburger_Close} />
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className="pt-5">
          <ul className="">
            <li className="offcanvas-item pt-2 pb-3">
              <a href="#about">About</a>
            </li>

            <li className="offcanvas-item pt-2 pb-3">
              <a href="#careers">Careers</a>
            </li>

            <li className="offcanvas-item pt-2 pb-3">
              <a href="#events">Events</a>
            </li>

            <li className="offcanvas-item pt-2 pb-3">
              <a href="#products">Products</a>
            </li>
            <li className="offcanvas-item pt-2 pb-3">
              <a href="#support">Support</a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

// render(<OffCanvas />);
export default OffCanvas;
