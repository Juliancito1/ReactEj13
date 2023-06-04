import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Cardclima from "./Cardclima";

const Formulario = () => {
    const[pais, setPais] = useState('');
    const[ciudad , setCiudad] = useState('')
    const[clima, setClima] =  useState([])
    useEffect(() => {
            consultarAPI();
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const consultarAPI = async () => {
        try {
                if(pais !== "" & ciudad !== "")
                {
               const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?&lang=es&q=${ciudad},${pais}&units=metric&appid=0f0a5e1bc31c0328bec625ffcadc1bd3`)
                const dato = await respuesta.json()
                console.log(dato);
                setClima([dato])
                }
            }
        catch (error) {
        }    
    }

    return (
        <Container className="my-5 border border-3 border-black">
            <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3 justify-content-center d-flex" controlId="formPais">
            <Form.Label className="d-inline fs-4">Ingresar el pais: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Pais" placeholder="Ej. Argentina" onChange={(e) => setPais(e.target.value)} value={pais}>
            </Form.Control>
            </Form.Group>
            <Form.Group className="my-3 justify-content-center d-flex" controlId="formCiudad">
            <Form.Label className="d-inline fs-4">Ingrese la ciudad: </Form.Label>
            <Form.Control type="text" className="d-inline w-50 ms-3 mb-4" aria-label="Ciudad" placeholder="Ej. San Miguel de Tucumán" onChange={(e) => setCiudad(e.target.value)} value={ciudad}>
            </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3 d-flex justify-content-center">
            <Button variant="primary" size="lg" type="submit" onClick={consultarAPI}>
                    Enviar
            </Button>
            </Form.Group>
            </Form>
            <Cardclima clima={clima}></Cardclima>
        </Container>
    );
};

export default Formulario;