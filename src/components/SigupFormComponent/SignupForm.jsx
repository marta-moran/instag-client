import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import authAuxios from '../../services/auth.service'


function SignupForm() {

    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        authAuxios
            .signup(user)
            .then(response => navigate('/login'))
            .catch(response => console.log(response))

    }

    // useEffect(() => {
    //     console.log(user)
    // }, [user])
    return (
        <div className='form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-5">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-5" >
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="username" placeholder="Enter email" name='name' onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} />
                </Form.Group>
                <button className='button mt-3' type="submit" >
                    Entrar
                </button>
            </Form>
        </div>
    )
}

export default SignupForm