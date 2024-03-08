import ProfilePicture from '../../../ProfilePicture/ProfilePicture'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import "./PostContentPost.css"

function PostContentPost( { contact, post } ) {
  return (
    <div className="post-content-post">
      <div className="post-header">
        <ProfilePicture user={contact} />
        <div className="post-header-info">
          <h3>{contact.firstName} {contact.lastName}</h3>
          <Link to={`/view/${post.id}`}><h4>{post.title}</h4></Link>
        </div>
      </div>
      <p className='post-content-text'>{post.content}</p>
    </div>
  )
}

PostContentPost.propTypes = {
    contact: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired
}

export default PostContentPost
