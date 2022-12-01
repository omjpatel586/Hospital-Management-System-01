import { Container, Row, Col, Card, Button, Breadcrumb } from "react-bootstrap";
// import { Compblog } from "./Compblog";

var blogs = [
    { "image": require("./Images/1.png"), "prod_name": "Lastest Digital X-Ray Machine" },
    { "image": require("./Images/2.jpg"), "prod_name": "Lastest Digital X-Ray Machine" },
    { "image": require("./Images/2.jpg"), "prod_name": "Lastest Digital X-Ray Machine" },
    { "image": require("./Images/2.jpg"), "prod_name": "Lastest Digital X-Ray Machine" }
]

const Blog = () => {
    return (
        <>
            <div>
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col xs={"auto"}>
                            <div className="p-4">
                                <h1 className="h1">Blog</h1>
                            </div>
                        </Col>
                        <Col xs={"auto"}>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="blog">
                                    Blog
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
                            blogs.map((i) => {
                                return (
                                    <>
                                        <Col xs="auto">
                                            <Card style={{ width: '18rem' }} className="shadow">
                                                <Card.Img variant="top" src={i.image} />
                                                <Card.Body>
                                                    <Card.Title>{i.prod_name}</Card.Title>
                                                </Card.Body>
                                            </Card>
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

export default Blog;