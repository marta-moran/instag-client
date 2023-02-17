import React, { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import postService from '../../services/post.service';
import { AuthContext } from '../../context/auth.context';
import { useNavigate } from 'react-router-dom'

function Details({ image }) {

    const navigate = useNavigate()

    const { storeToken, authentication, user } = useContext(AuthContext)

    console.log(user)

    const [post, setPost] = useState({})

    const handleChange = (event) => {
        const { value, name } = event.target
        setPost({ ...post, image, [name]: value, author: user._id });
    }

    useEffect(() => {
        console.log(user)
    }, [user])

  

    const handleSubmit = (event) => {
        event.preventDefault()
        postService.createPost(post)
        .then(createdPost => 
            navigate('/')
        )}

    return (
        <div className='details'>
            <img src={image} className="details-image"></img>
            <Form className='form-image' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un título' name='title' onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un pie de foto' name='description' onChange={handleChange} />
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