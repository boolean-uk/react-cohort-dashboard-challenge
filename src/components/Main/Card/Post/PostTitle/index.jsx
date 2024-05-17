import { Link } from "react-router-dom"
import ProfileImage from "../../../../ProfileImage"

export default function PostTitle(props) {
    const {author, title, id} = props

   
    return(
        <div className="post-header">
        <ProfileImage author={author}/>
        <div>
            <h3>{author && Object.keys(author).length > 0  ? author.firstName + " " + author.lastName : ""}</h3>
            <Link to={`/post/${id}`}><p>{title}</p></Link>
        </div>
        </div>
    )
}