import { Link } from "react-router-dom"

function PostTop({postingUser, post}) {
    return(
        <div className="top">
        <div 
        style={{backgroundColor: `${postingUser[0].favouriteColour}`}}
        className="profile-pic">{postingUser[0].firstName[0]}{postingUser[0].lastName[0]}</div>
        <div className="top-name-title">
            <Link to={`/profile/${postingUser[0].id}`}>{postingUser[0].firstName} {postingUser[0].lastName}</Link>
            <h4><Link to={`/${post.id}`}> {post.title}</Link></h4>
        </div>
    </div>
    )
}

export default PostTop