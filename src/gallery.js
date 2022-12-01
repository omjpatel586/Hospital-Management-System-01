import { Col, Container, Row, Card, Breadcrumb } from "react-bootstrap";

var photo = [
    { "image": require("./Images/1.png"), "name": "Topic" },
    { "image": require("./Images/1.png"), "name": "Topic" },
    { "image": require("./Images/1.png"), "name": "Topic" },
    { "image": require("./Images/1.png"), "name": "Topic" }
]

const Gallery = () => {
    return (
        <>
            <div>
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col xs={"auto"}>
                            <div className="p-4">
                                <h1 className="h1">Gallery</h1>
                            </div>
                        </Col>
                        <Col xs={"auto"}>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="gallery">
                                    Gallery
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <div className="p-4">
                    <Row>
                        {
                            photo.map((i) => {
                                return (
                                    <>
                                        <Col xs="auto">
                                            <div className="p-3">
                                                <Card style={{ width: '18rem' }} className="shadow">
                                                    <Card.Img variant="top" src={i.image} />
                                                    <Card.Body>
                                                        <Card.Title>{i.name}</Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Col>
                                    </>
                                )
                            })
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Gallery;