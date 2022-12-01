import "./App.css";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Location = () => {
    return (
        <>
            <div className="py-4">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="text-center">
                                <h1 className="fw-bolder">Location</h1>
                            </div>
                        </Col>
                        <Col>
                            <div className="position-relative">
                                <div className="py-5">
                                    <img src={require("./Images/location.PNG")}></img>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Location;