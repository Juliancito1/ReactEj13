import { Card, Container, Row , Col} from 'react-bootstrap';

const Cardclima = ({clima}) => {
   
    return (
        <Container className='d-flex justify-content-center my-3'>
            <Row>
            {clima.map((clima,indice) => (
                <Col md={12} key={indice}>
            <Card className='fondo'>
                <Card.Header>
                <Card.Title>{clima.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                <h4 className=''>Temperatura: {Math.round(clima.main.temp)} °C</h4>
                </Card.Body>
                <Card.Footer>
                <h4>Descripcion: {clima.weather[0].description}</h4>
                </Card.Footer>
            </Card>
            </Col>
            ))}
            </Row>
        </Container>
    );
};

export default Cardclima;