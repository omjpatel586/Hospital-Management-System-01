import "./App.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const servorth = [
  {
    image: require("./Images/fractured-bone.jpg"),
    content: "Trauma And Fracture",
  },
  {
    image: require("./Images/joint-replacement.jpg"),
    content: "Joint Replacement",
  },
  {
    image: require("./Images/knee-replacement.png"),
    content: "Knee Replacement",
  },
  {
    image: require("./Images/paediatric-orthopaedics.jpg"),
    content: "Paediatric Orthopaedics",
  },
  {
    image: require("./Images/spine-&-disc.jpg"),
    content: "Spine & Disc",
  },
];

const servphc = [
  {
    image: require("./Images/1.png"),
    content: "Hearing Instrument 1",
  },
  {
    image: require("./Images/2.jpg"),
    content: "Hearing Instrument 2",
  },
  {
    image: require("./Images/3.png"),
    content: "Cochlear Implant 1",
  },
  {
    image: require("./Images/4.png"),
    content: "Cochlear Implant 2",
  },
];

const servphyc = [
  {
    image: require("./Images/m-pycho-serv-1.jpeg"),
    content: "Muscuskeletal Physiology",
  },
  {
    image: require("./Images/s-pycho-serv-2.jpg"),
    content: "Sports Physiology",
  },
  {
    image: require("./Images/g-pycho-serv-3.jpeg"),
    content: "Geriatric Physiology",
  },
  {
    image: require("./Images/pm-pycho-serv-4.jpg"),
    content: "Pain Physiology",
  },
  {
    image: require("./Images/wh-pycho-serv-5.jpeg"),
    content: "Women Health",
  },
];

const Services = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F7CE68" }} className="d-none">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={"auto"}>
              <h1 className="h1">Services</h1>
            </Col>
            <Col xs={"auto"}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="services">Services</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-5" id="services">
        <Container>
          <Row>
            <Col xs={12}>
              <div>
                <h1 className="text-center m-0 fw-bolder">Services</h1>
              </div>
            </Col>
            <Col className="text-center py-4" xs={12}>
              <div className="b-radius d-inline-block p-4">
                <h1 className="text-center fs-custom">
                  Orthopaedic Related Services
                </h1>
              </div>
            </Col>
            <Col>
              <div className="p-2">
                <Row className="justify-content-center" xs={1} lg={2} xl={3}>
                  {servorth.map((i) => {
                    return (
                      <Col sm={6} className="py-4 shadow">
                        <div>
                          <div className="d-flex justify-content-center serv-hover">
                            <img src={i.image} className="b-radius w-50"></img>
                          </div>
                          <h1 className="h6 m-0 text-center">{i.content}</h1>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-4" xs={12}>
              <div className="b-radius d-inline-block p-4">
                <h1 className="text-center fs-custom">PHC Related Services</h1>
              </div>
            </Col>
            <Col>
              <div className="p-2">
                <Row className="justify-content-center" xs={1} lg={2} xl={3}>
                  {servphc.map((i) => {
                    return (
                      <Col sm={6} className="py-4 shadow">
                        <div>
                          <div className="d-flex justify-content-center serv-hover">
                            <img src={i.image} className="b-radius w-50"></img>
                          </div>
                          <h1 className="h6 m-0 text-center">{i.content}</h1>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Col className="text-center py-4" xs={12}>
                <div className="b-radius d-inline-block p-4">
                  <h1 className="text-center fs-custom">
                    Physiologist Services
                  </h1>
                </div>
              </Col>
              <Col>
                <div className="p-2">
                  <Row className="justify-content-center" xs={1} lg={2} xl={3}>
                    {servphyc.map((i) => {
                      return (
                        <Col sm={6} className="py-4 shadow">
                          <div className="d-flex justify-content-center serv-hover">
                            <img
                              src={i.image}
                              className="w-50"
                            ></img>
                          </div>
                          <h1 className="h6 m-0 text-center">{i.content}</h1>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
