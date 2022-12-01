import "./App.css";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

const Facilities = () => {
    return (
        <>
            <div style={{ backgroundColor: "orange" }} className="d-none">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col xs={"auto"}>
                            <h1 className="h1">Facilities</h1>
                        </Col>
                        <Col xs={"auto"}>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="facilities">
                                    Facilities
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-5 shadow">
                <Container>
                    <Row xs={1} id="facilities">
                        <Col xs={12} className="p-4">
                            <h1 className="text-center m-0 fw-bolder">Facilities</h1>
                        </Col>
                        <Col className="text-center shadow p-4" xs={12} lg={6}>
                            <div className="b-radius d-inline-block p-4">
                                <h1 className="text-center text-size">Orthopaedic Facilities</h1>
                            </div>
                            <Row className="justify-content-between">
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/f1.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                        <img src={require("./Images/f2.jpg")} className="b-radius w-25"></img>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/f3.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-center shadow p-4" xs={12} lg={6}>
                            <div className="b-radius d-inline-block p-4">
                                <h1 className="text-center text-size">PHC Facilities</h1>
                            </div>
                            <Row className="justify-content-center">
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/f4.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                        <img src={require("./Images/f5.jpg")} className="b-radius w-25"></img>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/f6.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="text-center mx-auto shadow p-4" xs={12} lg={6}>
                            <div className="b-radius d-md-inline-block p-3">
                                <h1 className="text-center text-size lg-h4 h6">Superspeciality<br></br>(Neurologist) Facilities</h1>
                            </div>
                            <Row className="justify-content-center">
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/fractured-bone.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                        <img src={require("./Images/fractured-bone.jpg")} className="b-radius w-25"></img>
                                    </div>
                                </Col>
                                <Col xs={12} className="py-4 shadow">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <img src={require("./Images/fractured-bone.jpg")} className="b-radius w-25"></img>
                                        <h1 className="h6 m-0 text-center">Content</h1>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Facilities;