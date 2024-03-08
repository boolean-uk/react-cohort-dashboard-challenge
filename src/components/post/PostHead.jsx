import ProfilePicture from "../reusable/ProfilePicture"

function PostHead(props) {
  if(props.user !== undefined) {}

  return (
    <div className="post-head">
      <ProfilePicture user={props.user} />      
      <span className="post-by">{`${props.postedBy.firstName} ${props.postedBy.lastName} `}</span>
      <span className="post-title">{`${props.postTitle}`}</span>
    </div>
  )
}

export default PostHead