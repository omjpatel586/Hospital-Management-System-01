import "./App.css";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact US If Any Query
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Form className="fs-6 fw-bolder shadow p-3">
                    <Form.Group
                        as={Row}
                        className="mb-3 justify-content-between"
                        controlId="formHorizontalEmail"
                    >
                        <Form.Label column sm={2}>
                            Email
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>

                    <Form.Group
                        as={Row}
                        className="mb-3 justify-content-between"
                        controlId="formHorizontalPassword"
                    >
                        <Form.Label column sm={2}>
                            Password
                        </Form.Label>
                        <Col sm={5}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3 justify-content-between">
                            <Form.Label as="legend" column sm={2}>
                                Client Reaction
                            </Form.Label>
                            <Col sm={5} className="fs-6">
                                <Form.Check
                                    type="radio"
                                    label="Website has no flexiblity"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                                <Form.Check
                                    type="radio"
                                    label="the contents are boring"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Other Issue"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                />
                                <Form.Control type="text" placeholder="Other Issue...." />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group
                        as={Row}
                        className="mb-3 justify-content-between"
                        controlId="formHorizontalCheck"
                    >
                        <Col sm={{ span: 10, offset: 2 }} className="fs-6">
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <button type="submit" className="contactbtn">Contact US</button>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Footer = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <footer className="part_1 py-4">
                <Container>
                    <Row className="fs-4 justify-content-center" lg={4} sm={2} xs={1}>
                        <Col className="text-center">
                            <p className="fw-bolder fs-5 text-white">Appt Timing</p>
                            <p className="fw-bolder fs-6" style={{ color: "black" }}>Morning Time :-</p>
                            <p className="fs-6" style={{ color: "black" }}>9:00am to 12:00pm</p>
                            <p className="fw-bolder fs-6" style={{ color: "black" }}>Afternoon Time :-</p>
                            <p className=" fs-6" style={{ color: "black" }}>3:00pm to 6:00pm</p>
                        </Col>
                        <Col className="text-center">
                            <p className="fw-bolder fs-5 text-white">Some Pages</p>
                            <div className="d-flex flex-wrap-wrap justify-content-center">
                                <ul className="footer_section p-0">
                                    <li className="list-unstyled">
                                        <a href="#services" className="text-decoration-none fs-6">Products</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#facilities" className="text-decoration-none fs-6">Facilities</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#modules" className="text-decoration-none fs-6">Modules</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#aboutus" className="text-decoration-none fs-6">About Us</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="text-center">
                            <Row xs={1} className="justify-content-between text-white">
                                <Col>
                                    <p className="fw-bolder fs-5">Contact Us</p>
                                </Col>
                                <Col>
                                    <p className="fw-bolder fs-5 text-dark">Address :-</p>
                                    <p className="fs-6 text-dark">401,near jakatnaka,surat</p>
                                </Col>
                                <Col>
                                    <p className="fw-bolder fs-5 text-dark">Contact Number :-</p>
                                    <p className="fs-6 text-dark">+91 8987975732</p>
                                    <p className="fw-bolder fs-5 text-dark">Emergency Number :-</p>
                                    <p className="fs-6 text-dark">+91 9231876452</p>
                                </Col>
                            </Row>
                            <button className="contactbtn" onClick={() => setModalShow(true)}>
                                Contact US
                            </button>

                            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                        </Col>
                        <Col className="text-center">
                            <p className="fw-bolder fs-5 text-white">Doctor's Short Information</p>
                            <p className="text-dark fs-6">
                                <p className="fw-bolder fs-5">Doctor's Name :-</p> Dr.Amit Jasoliya
                                MS Ortho Surgeon
                            </p>
                            <p className="text-dark fs-6">
                                Dr.Tushar  Kakadiya
                                PHC & Speech Specialist
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;