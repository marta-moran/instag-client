import { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import authService from '../../services/auth.service'
import { AuthContext } from '../../context/auth.context';
import { Link, useNavigate } from 'react-router-dom'
import './Form.css'

function LoginForm() {

    const navigate = useNavigate()

    const [user, setUser] = useState({});
    const { storeToken, authentication } = useContext(AuthContext)

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        authService
            .login(user)
            .then((authToken) => {
                storeToken(authToken)
                authentication()
                console.log("hola")
                navigate('/');
            })
            .catch((response) => {
                // console.log(response)
                if (response.code === "ERR_BAD_RESPONSE") {
                    setError(true)
                }
            })

    }

    return (
        <div className='form' onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email o nombre de usuario</Form.Label>
                    <Form.Control type="email" onChange={handleInputChange} name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 mt-5">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleInputChange} name="password" required />
                </Form.Group>
                <button className='button mt-4' type="submit">
                    Entrar
                </button>
            </Form>
            <p className='mt-5'>¿No tienes cuenta? <Link to="/signup">Regístrate</Link></p>
        </div>

    )
}

export default LoginForm