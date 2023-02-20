import { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Explorer.css'
import postService from '../../services/post.service';
import { Link } from 'react-router-dom';

function Explorer() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    postService.explorerPost()
      .then(allPosts => {
        setPosts(allPosts.posts)
      })
  }, [])
  return (
    <div>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3} rowHeight={100} className="imageList">
        {posts.map((post) => (
          <Link to={`/details/${post._id}`} key={post.image}>
            <ImageListItem>
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
    </div>
  )
}

export default Explorer