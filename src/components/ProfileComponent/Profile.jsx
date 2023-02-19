import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import postService from "../../services/post.service"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

function Profile() {

    const [posts, setPosts] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        postService
            .getAllPost(localStorage.getItem('tokenAuth'))
            .then(userPosts => setPosts(userPosts))
        console.log(user)
    }, [user])

    return (
        <div>
            {
                user && (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'end' }} className="ms-4 mb-2 mt-3 avatar">
                            <Avatar src={user.avatar}></Avatar>
                            <h4>{user.name}</h4>
                        </div>
                        <hr></hr>
                        <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={100} className="imageList">

                            {posts.map((post) => (
                                <Link to={`/details/${post._id}`} key={post.image}>
                                    <ImageListItem key={post.image}>
                                        <img
                                            src={`${post.image}?w=164&h=164&fit=crop&auto=format`}
                                            srcSet={`${post.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                            alt={post.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                </Link>
                            ))}
                        </ImageList>
                    </>

                )
            }
        </div>
    )
}

export default Profile