import "./App.css";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const data = [
  { "title": "OPD Module", "color": "#F44336", "content": "Content" },
  { "title": "Radiology Module", "color": "#FFEB3B", "content": "Content" },
  { "title": "IPD Module", "color": "#9C27B0", "content": "Content" },
  { "title": "Inventory Module", "color": "#4CAF50", "content": "Content" },
  { "title": "OT Module", "color": "#2196F3", "content": "Content" },
  { "title": "Payroll Module", "color": "#3F51B5", "content": "Content" },
  { "title": "Blood Bank Module", "color": "#FFC107", "content": "Content" },
  { "title": "Financial Module", "color": "#795548", "content": "Content" },
  { "title": "Pharmaceutical Module", "color": "#FF5722", "content": "Content" }
]

// flex wrap and height are fixed than use the tag in new parent

const Modules = () => {
  return (
    <>
      <div className="py-4">
        <Container>
          <Row className="text-center justify-content-center" id="modules">
            <Col xs={12} className="py-2">
              <div className="">
                <h1 className="fw-bolder">Newlife Modules</h1>
              </div>
            </Col>
            {
              data.map((i) => {
                return (
                  <Col className="py-2" xs={6} lg={3}>
                    <div className="m-design d-flex mx-auto justify-content-center align-items-center" style={{backgroundColor:i.color}}>
                      <div>
                        <h1 className="h6 w-100 m-0">{i.title}</h1>
                        <p className="m-0">{i.content}</p>
                      </div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Modules;
