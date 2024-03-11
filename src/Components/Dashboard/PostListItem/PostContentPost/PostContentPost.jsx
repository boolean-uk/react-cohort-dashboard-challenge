import ProfilePicture from '../../../ProfilePicture/ProfilePicture'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import "./PostContentPost.css"
import { useContext } from 'react'
import { LoadingContext, PostContext } from '../../Dashboard'

function PostContentPost( { contact, post } ) {
  const { posts, setPosts } = useContext(PostContext)
  const { setLoading } = useContext(LoadingContext)
  
  async function handleDelete() {

    const deleteRequest = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    }
    setLoading(true)
    await fetch("https://boolean-api-server.fly.dev/kristianverduin/post/" + post.id, deleteRequest)
      .then(res => res.json())
      .then(setPosts(posts.filter(p => p.id !== post.id)))
    setLoading(false)
  }

  return (
    <div className="post-content-post">
      <div className="post-header">
        <ProfilePicture user={contact} />
        <div className="post-header-info">
          <h3>{contact.firstName} {contact.lastName}</h3>
          <Link to={`/view/${post.id}`}><h4>{post.title}</h4></Link>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <p className='post-content-text'>{post.content}</p>
    </div>
  )
}

PostContentPost.propTypes = {
    contact: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

export default PostContentPost
