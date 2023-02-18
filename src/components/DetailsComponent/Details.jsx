import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import postService from '../../services/post.service'
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { display } from '@mui/system';
import { AuthContext } from '../../context/auth.context'

function Details() {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [post, setPost] = useState(
        {
            author: { name: '' },
            image: '',
            title: '',
            description: ''
        })

    useEffect(() => {
        postService.getDetailsPhoto(id)
            .then(post => {
                setPost(post)

            })
            .catch(err => console.log(err))
    }, [])
    console.log(post)
    return (
        <>
            <h4>{post.author.name}</h4>
            <img src={post.image} width="90%-"></img>
            <h5>{post.title}</h5>
            <h5>{post.description}</h5>

            {
                user && (
                    post.author._id === user._id && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{ borderRadius: '20px', border: '3px solid #69f0ae', padding: '5px', backgroundColor: '#69f0ae' }} className="me-3">
                                <FiEdit3 size={25} color={'white'} ></FiEdit3>
                            </div>
                            <div style={{ borderRadius: '20px', border: '3px solid red', padding: '5px', backgroundColor: 'red' }} className="me-3">
                                <FiTrash2 size={25} color={'white'}></FiTrash2>
                            </div>
                        </div>
                    )
                )
            }

        </>
    )
}

export default Details