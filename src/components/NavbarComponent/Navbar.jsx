import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Instag</Navbar.Brand>
                    <Nav className="me-auto nav">
                        <Link to="/">Home</Link>
                        <Link to="/films">Explora</Link>
                        <Link to="/series">Perfil</Link>
                    </Nav>
                </Container>
            </Navbar>
  )
}

export default NavbarComponent