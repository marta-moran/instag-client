import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Details({ element }) {

    return (
        <div className='details'>
            <img src={element} className="details-image"></img>
            <Form className='form-image'>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un título' />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un pie de foto' />
                </Form.Group>
                <div className="buttons-details">
                    <Link to="/"><BsArrowLeftCircle size={30}></BsArrowLeftCircle></Link>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Details