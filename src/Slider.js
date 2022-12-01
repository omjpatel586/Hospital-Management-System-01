import "./App.css";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';

const Slider = () => {
    return (
        <>
            <div className="shadow">
                <Container>
                    <Row className="align-items-center justify-content-center">
                        <Col lg={4}>
                            <OwlCarousel className="owl-theme p-4 shadow" items={1} dots loop autoplay autoplayTimeout={2000}>
                                <div className="item">
                                    <img src={require("./Images/fracture-foot-ankle.jpg")}></img>
                                </div>
                                <div className="item">
                                    <img src={require("./Images/orhopedic-hospital-bed.jpg")}></img>
                                </div>
                                <div className="item">
                                    <img src={require("./Images/IITV-orthopedic-hospital-surat.jpg")}></img>
                                </div>
                                <div className="item">
                                    <img src={require("./Images/replacement-knee-hip-shoulder.jpg")}></img>
                                </div>
                            </OwlCarousel>
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h2 className="h2 text-primary">Orthopedic Introduction</h2>
                                <p>
                                    Orthopedics is a branch of medicine that focuses on the care of the musculoskeletal system. This system consists of muscles, bones, joints, ligaments, and tendons.
                                </p>
                            </div>
                            <div>
                                <h2 className="h2 text-primary">Orthopaedic Specialty Areas</h2>
                                <p>
                                    <ul>
                                        <li>
                                            Foot and Ankle Surgery. Hip and Knee Replacement. Shoulder and Elbow Surgery. Trauma Surgery.
                                        </li>
                                        <li>
                                            General Orthopaedics. Orthopaedic Oncology. Spine Surgery. Bone Health Center.
                                        </li>
                                        <li>
                                            Hand Surgery. Pediatric Orthopaedic Surgery. Sports Medicine. Osseointegration Clinic.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div className="text-center">
                                <a href="#services" className="btn list-unstyled btn-primary" >Services</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Slider;