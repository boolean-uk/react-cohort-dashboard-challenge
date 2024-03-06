import { Link } from "react-router-dom"
import PostCommentsList from "./PostCommentsList"

/* eslint-disable react/prop-types */
export default function PostsListItem(props) {
    const {post, contacts, index} = props
    const contact = contacts.find((x) => x.id === post.contactId)

    if (!contact) return <p> loading post user... </p>

    return (    
        <li key={index}>
            <h4>{contact.firstName}</h4>
            <h1 className="post--title">
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h1>
            <p>
                {post.content}
            </p>
            <PostCommentsList post={post} contacts={contacts}/>
        </li>
    )
}