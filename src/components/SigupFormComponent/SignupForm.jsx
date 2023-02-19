import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import authAuxios from '../../services/auth.service'
import postService from '../../services/post.service';


function SignupForm() {

    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const [image, setImage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const uploadPhoto = (e) => {
        const file = e.target.files[0];
        const formData = new FormData()
        formData.append('imageUrl', file)

        postService.uploadPhoto(formData)
            .then(url => {
                console.log(url)
                setImage(url)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        authAuxios
            .signup(user)
            .then(response => navigate('/login'))
            .catch(response => console.log(response))

    }

    useEffect(() => {
        console.log(user)
        setUser({ ...user, avatar: image })
    }, [image])


    return (
        <div className='form mt-2'>
            <Form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <input id="file-upload" type="file" name="avatar" onChange={uploadPhoto} />
                <button className='button mt-5' type="submit" style={{ color: 'white' }}>
                    Entrar
                </button>
                <Link to='/login' className='mt-2'>Atrás</Link>
            </Form>
        </div>
    )
}

export default SignupForm