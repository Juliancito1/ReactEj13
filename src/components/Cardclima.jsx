import { Card, Container, Row , Col} from 'react-bootstrap';

const Cardclima = ({clima}) => {
   
    return (
        <Container className='d-flex justify-content-center'>
            <Row>
            {clima.map((clima,indice) => {
                <Col md={12} key={indice}>
            <Card>
                <Card.Header>
                <Card.Title>{clima.name}</Card.Title>
                </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
            </Col>
            })}
            </Row>
        </Container>
    );
};

export default Cardclima;