import "./App.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <div style={{ backgroundColor: "orange" }} className="d-none">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs={"auto"}>
              <h1 className="h1">AboutUs</h1>
            </Col>
            <Col xs={"auto"}>
              <Breadcrumb>
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="aboutus">AboutUs</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-4 shadow">
      <Container>
        <Row id="aboutus">
          <Col xs={12}>
            <h1 className="text-center fw-bolder m-0">AboutUs</h1>
            <h1 className="h4 text-center fw-bolder py-2">Doctor's Testimonails</h1>
          </Col>
          <Col>
            <OwlCarousel className="owl-theme shadow" dots items={1}>
              <div className="item">
                <div className="w-xs-50 w-md-25  mx-auto">
                  <img src={require("./Images/doctor_info_1.jpeg")} alt="Not Found"></img>
                </div>
                <div className="mx-auto">
                  <h1 className="h2 m-0 text-center">Dr. Amit Jasoliya</h1>
                  <h1 className="h3 m-0 text-center">MS Ortho.</h1>
                  <p className="h6 m-0 text-center">
                    Consultant Trauma, Joint Replacement & Arthroscopy Surgeon
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="w-xs-50 w-md-25 mx-auto">
                  <img src={require("./Images/doctor_info_1.jpg")} alt="Not Found"></img>
                </div>
                <div className="mx-auto">
                  <h1 className="h2 m-0 text-center">Dr. Tushar Kakadiya</h1>
                  <h1 className="h3 m-0 text-center">
                    PHC & Speech Specialist
                  </h1>
                  <p className="h6 m-0 text-center">M.Sc (Sp. & Hg.) Ph.D</p>
                </div>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default AboutUs;
