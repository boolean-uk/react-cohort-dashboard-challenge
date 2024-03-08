import ProfileCircle from "../../Profile/components/ProfileCircle"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function PostHeader({user, post}) {

  return (
    <div className="post-header-container">
        <div className="profile-image">
          <Link to={`/profile/${user.id}`}>
            <ProfileCircle user={user}></ProfileCircle>
          </Link>
        </div>
        <div className= "name-and-title"> 
            <h3 className="user-name">{user.firstName + " " + user.lastName}</h3>
            <Link to = {`/post/${post.id}`} className='details-link'>
              <h4 className="post-title">{post.title}</h4>
            </Link>
        </div>
    </div>

  )
}

PostHeader.propTypes = {

  user: PropTypes.object,
  post: PropTypes.object

}

export default PostHeader