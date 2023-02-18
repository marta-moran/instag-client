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

    const { user } = useContext(AuthContext)

    const [post, setPost] = useState({ image, title: '', description: '', author: user._id })

    const handleChange = (event) => {
        const { value, name } = event.target
        setPost({ ...post, [name]: value });
    }

    useEffect(() => {
        console.log(post)
    }, [post])



    const handleSubmit = (event) => {
        event.preventDefault()
        postService.createPost(post)
            .then(createdPost => {
                console.log(createdPost)
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='details mt-5'>
            <img src={image} className="details-image mt-3 mb-3"></img>
            <Form className='form-image' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mt-3">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un título' name='title' onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mt-4 mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder='Escribe un pie de foto' name='description' onChange={handleChange} />
                </Form.Group>
                <div className="buttons-details mt-5">
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