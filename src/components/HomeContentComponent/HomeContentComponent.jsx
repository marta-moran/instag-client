import React, { useState, useEffect, useContext } from 'react'
import postService from '../../services/post.service'
import { AuthContext } from '../../context/auth.context'
import './HomeContentComponent.css'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';


function HomeContentComponent() {
    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        postService
            .getAllPost(localStorage.getItem('tokenAuth'))
            .then(userPosts => setPosts(userPosts))

    }, [])

    return (
        <div>
            {
                posts.length ? (
                    posts.map((post, index) => (
                        <div key={index} className="feed" >
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }} className="ms-4 mb-2 avatar">
                                <Link to="/profile"><Avatar src={user.avatar}></Avatar></Link>
                                <h4>{post.author.name}</h4>
                            </div>
                            <Link to={`/details/${post._id}`}>
                                <div className="img-container">
                                    <img src={post.image} />
                                </div>
                                <h5>{post.title}</h5>
                                <h5 className='mb-4'>{post.description}</h5>
                            </Link>
                        </div>
                    ))
                ) : (
                    <h3>Aun no has subido ningún post 😣</h3>
                )
            }
        </div>
    )
}

export default HomeContentComponent