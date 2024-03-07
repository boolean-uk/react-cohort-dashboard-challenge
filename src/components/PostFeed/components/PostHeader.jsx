import ProfileCircle from "../../Profile/components/ProfileCircle"

function PostHeader({user, post}) {

  return (
    <div className="post-header-container">
        <div className="profile-image">
            <ProfileCircle user={user}></ProfileCircle>
        </div>
        <div className= "name-and-title"> 
            <h3 className="user-name">{user.lastName + " " + user.firstName}</h3>
            <h4 className="post-title">{post.title}</h4>
        </div>
    </div>

  )
}

export default PostHeader