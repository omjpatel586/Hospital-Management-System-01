import { Card,Col,Button } from "react-bootstrap"

const Compblog = (props) => {
    return (
        <>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.img_name} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Compblog;