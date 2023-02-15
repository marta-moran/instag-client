import React from 'react'
import Form from 'react-bootstrap/Form';


function SignupForm() {
  return (
    <div className='form'>
    <Form>
        <Form.Group className="mb-5">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-5" >
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type="username" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-5">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className='button mt-3' type="submit" >
            Entrar
        </button>
    </Form>
</div>
  )
}

export default SignupForm