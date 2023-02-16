import React, { useState, useEffect } from 'react'
import postService from '../../services/post.service'
import { AuthContext } from '../../context/auth.context'

function HomeContentComponent() {
    const [posts, setPosts] = useState([])
    // const { user } = useContext(AuthContext)

    useEffect(() => {
        postService
            .getAllPost(localStorage.getItem('tokenAuth'))
            .then(userPosts => setPosts(userPosts))

    }, [])

    return (
        <div>
            {
                posts.length ? (
                    posts.map(post => (
                        <div>
                            <h4>{post.author.name}</h4>
                            <img src={post.image} />
                            <h5>{post.title}</h5>
                            <h5>{post.description}</h5>
                        </div>
                    ))
                ) : (
                    <h3>No tienes ningún post :(</h3>
                )
            }
        </div>
    )
}

export default HomeContentComponent