import ProfilePicture from "../reusable/ProfilePicture"
import { Link } from "react-router-dom"

function PostHead(props) {
  if(props.user !== undefined) {}
  return (
    <div className="post-head">
      <ProfilePicture user={props.user} />      
      <span className="post-by">{`${props.postedBy.firstName} ${props.postedBy.lastName} `}</span>
      <span className="post-title"><Link to={`/post/${props.postId}`}>{`${props.postTitle}`}</Link></span>
    </div>
  )
}

export default PostHead