import { Link } from "react-router-dom"
import PostCommentsList from "./PostCommentsList"
import { MyContext } from "../App"
import { useContext } from "react"
import ProfilePicture from "./ProfilePicture"

/* eslint-disable react/prop-types */
export default function PostsListItem(props) {
    const context = useContext(MyContext)
    const {post, index} = props
    const contact = context.contacts.find((x) => x.id === post.contactId)

    if (!contact) return <p> loading post user... </p>

    return (    
        <li key={index} className="card">
            <div className="post-profile">
                <Link to={`/profile/${contact.id}`}>
                <ProfilePicture firstName={contact.firstName} lastName={contact.lastName} favouriteColour={contact.favouriteColour} />
                </Link>
            </div>
            <Link to={`/profile/${contact.id}`}>
            <h4>{contact.firstName} {contact.lastName}</h4></Link>
            <h1 className="post--title">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h1>
            <p>
                {post.content}
            </p>
            <PostCommentsList post={post}/>
        </li>
    )
}