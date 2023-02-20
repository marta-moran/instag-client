import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useHref } from 'react-router-dom'
import postService from '../../services/post.service'
import { FiEdit3 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import './Details.css'
import Avatar from '@mui/material/Avatar';


import { AuthContext } from '../../context/auth.context'

function Details() {
    const navigate = useNavigate()

    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const [post, setPost] = useState(
        {
            author: { name: '', avatar: '' },
            image: '',
            title: '',
            description: ''
        })
    const [edit, setEdit] = useState(false)
    const [editing, setEditing] = useState({})


    const handleClickDelete = () => {
        postService.deletePost(id)
            .then(deletedPost => {
                console.log("borrado")
                navigate('/')

            })
            .catch(err => {
                console.error('Error deleting post:', err);
            });
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setPost({ ...post, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postService.editPost(id, post)
            .then(updatedPost => {
                console.log("POSTTTTTTTTTTTTTTTTTTT", post)
                setPost(updatedPost)
                navigate('/')
            })
    }

    useEffect(() => {
        postService.getDetailsPhoto(id)
            .then(post => {
                setPost(post)


            })
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar src={post.author.avatar}></Avatar>
                <h4 className='mt-3'>{post.author.name}</h4>
            </div>
            <img src={post.image} width="65%-"></img>
            {
                edit ?

                    <form onSubmit={handleSubmit} className='edit'>
                        <input type="text" name='title' placeholder={post.title} className="mt-3" autoFocus onChange={handleChange} />
                        <input type="text" name='description' placeholder={post.description} className="mt-3 mb-4" onChange={handleChange} /><br></br>
                        <div className='' style={{ display: 'flex', marginLeft: '4em' }}>
                            <button type='submit' style={{ borderRadius: '20px', border: '3px solid #69f0ae', padding: '5px', backgroundColor: '#69f0ae' }}><FiCheck size={25} color={'white'} /></button>
                        </div>

                    </form>


                    :
                    <>
                        <h5 className='text-center'>{post.title}</h5>
                        <h5 className='text-center'>{post.description}</h5>
                    </>
            }



            {
                user && (
                    post.author._id === user._id && (
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            {
                                edit && (
                                    <div style={{
                                        borderRadius: '20px', border: '3px solid yellow', padding: '5px', backgroundColor: 'yellow'
                                    }} className="me-3 mt-2" onClick={() => setEdit(false)}>
                                        <FiX size={25} color={'white'} />
                                    </div>
                                )
                            }

                            <div style={{ borderRadius: '20px', border: '3px solid blue', padding: '5px', backgroundColor: 'blue' }} className="me-3 mt-2" onClick={() => setEdit(true)}>
                                <FiEdit3 size={25} color={'white'} ></FiEdit3>
                            </div>

                            <div style={{ borderRadius: '20px', border: '3px solid red', padding: '5px', backgroundColor: 'red' }} className="me-3 mt-2" onClick={handleClickDelete}>
                                <FiTrash2 size={25} color={'white'}></FiTrash2>
                            </div>
                        </div >
                    )
                )
            }

        </>
    )
}

export default Details