import "./App.css";
import "./css/style.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { BsFacebook, BsWhatsapp, BsTwitter, BsGoogle } from 'react-icons/bs'; 
import { FaBars } from 'react-icons/fa';

function MyVerticallyCenteredModal(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Schedule Appt Online
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Patient First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Patient Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <InputGroup hasValidation>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Patient City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Patient State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control type="date" placeholder="Appt Date" required />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Appointment Time</Form.Label>
              <Form.Control type="time" placeholder="Appt Time" required />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
          <Row>
            <Col xs={"auto"}>
              <h2 className="h1 text-danger">Note :- </h2>
              <ul className="list-unstyled m-0">
                <h2 className="h6">Appt Timing</h2>
                <li>Morning Time :- 9:00am To 12:00pm</li>
                <li>Afternoon Time :- 3:00am To 6:00pm</li>
              </ul>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Login(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const shownav = () => {
  document.getElementById("inav").style.display = "none";
  document.getElementById("snav").style.display = "block";
}

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <>
      <div>
        <div className="part_1">
          <Container>
            <Row
              className="align-items-center justify-content-between py-2"
              xs={2}
            >
              <Col xs={"auto"}>
                <Row className="align-items-center">
                  <Col xs={"auto"}>
                    <h2 className="h6 d-none d-sm-block">
                      newlife.clinic@gmail.com
                    </h2>
                  </Col>
                  <Col xs={"auto"}>
                    <button
                      className="btn btn-primary"
                      onClick={() => setModalShow1(true)}
                    >
                      Login
                    </button>
                    <Login
                      show={modalShow1}
                      onHide={() => setModalShow1(false)}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={"auto"}>
                <i className="p-1 p-sm-2"><BsFacebook/></i>
                <i className="p-1 p-sm-2"><BsWhatsapp/></i>
                <i className="p-1 p-sm-2"><BsTwitter/></i>
                <i className="p-1 p-sm-2"><BsGoogle/></i>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="part_2 py-4">
          <Container>
            <Row className="align-items-center justify-content-between" xs={2}>
              <Col xs={"auto"}>
                <Row className="align-items-center" xs={2}>
                  <Col xs={"auto"}>
                    <div className="image">
                      <img
                        src={require("./Images/logo.jpg")}
                        className="w-lg-100" alt="Not Found"
                      ></img> 
                    </div>
                  </Col>
                  <Col xs={"auto"}>
                    <button className="d-block d-lg-none border-0"  onClick={ shownav }>
                      <FaBars/>
                    </button>
                    <nav className="display-none d-lg-block" id="snav">
                      <ul className="list-unstyled d-flex m-0">
                        <li className="p-2">
                          <a
                            href="/"
                            className="text-decoration-none text-dark"
                          >
                            Home
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="facilities"
                            className="text-decoration-none text-dark"
                          >
                            Products
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="services"
                            className="text-decoration-none text-dark"
                          >
                            Services
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="aboutus"
                            className="text-decoration-none text-dark"
                          >
                            About Us
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="contactus"
                            className="text-decoration-none text-dark"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="blog"
                            className="text-decoration-none text-dark"
                          >
                            Blog
                          </a>
                        </li>
                        <li className="p-2">
                          <a
                            href="gallery"
                            className="text-decoration-none text-dark"
                          >
                            Gallery
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </Col>
                </Row>
              </Col>
              <Col xs={"auto"}>
                <Row className="align-items-center" xs={1}>
                  <Col xs={"auto"}>
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Online Appt
                    </Button>

                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
