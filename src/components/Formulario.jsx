import { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Formulario = () => {
    const[ubicacion , setUbicacion] = useState('')
    const[pais, setPais] = useState('');
    const[clima, setClima] =  useState([])
    useEffect(() => {
            consultarAPI();
    },[ubicacion, pais])


    const consultarAPI = async () => {
        try {
                const respuesta = await fetch(``)
                const dato = await respuesta.json()
                setClima(...clima)
            }
        catch (error) {
        }    
    }

    return (
        <Container className="my-5 border border-3 border-black">
            <Form>
            <Form.Group className="my-3 justify-content-center d-flex" controlId="formUbicacion">
            <Form.Label className="d-inline fs-4">Ingrese la ubicación: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Pais" onChange={(e) => setUbicacion(e.target.value)} value={ubicacion}>
            </Form.Control>
            </Form.Group>
            <Form.Group className="my-3 justify-content-center d-flex border-bottom border-black border-1" controlId="formPais">
            <Form.Label className="d-inline fs-4">Ingresar el pais: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Ubicacion" onChange={(e) => setPais(e.target.value)} value={pais}>
            </Form.Control>
            </Form.Group>
            </Form>
        </Container>
    );
};

export default Formulario;