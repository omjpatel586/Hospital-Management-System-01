import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Breadcrumb } from "react-bootstrap";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={"auto"}>
              <div className="p-4">
                <h1 className="h1">Contact Us</h1>
              </div>
            </Col>
            <Col xs={"auto"}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="gallery">
                  Contact Us
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="my-4">
              <Form className="fs-3 fw-bolder shadow p-3">
                <Form.Group
                  as={Row}
                  className="mb-3"
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
                  className="mb-3"
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
                  <Form.Group as={Row} className="mb-3">
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
                  className="mb-3"
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
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
