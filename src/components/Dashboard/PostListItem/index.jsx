import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../../App"
import Avatar from "react-avatar"
import RenderComments from "./Comments"
import { Link } from "react-router-dom"

function PostListItem({post}) {
    const {contacts, loggedInUser} = useContext(AppContext)
    const [author, setAuthor] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() =>{
        if(post){
            setAuthor(contacts.find((contact) => 
            contact.id === post.contactId))
        }
    }, [contacts,post])

    if(!author) return <p>Could not find the author</p>
    if (!loggedInUser) return <p>User not logged in</p>

    return(
        <div className="post-item">
            <div className="post-header">
                <Avatar className="post-avatar" name={`${author.firstName} ${author.lastName}`} 
                    round={true} textSizeRatio={2}/>
                <div className="post-details">
                    <h3 className="author-name">{`${author.firstName} ${author.lastName}`}</h3>
                    <Link to={`/post/${post.id}`}><h4 className="post-title">{post.title}</h4></Link>
                </div>
            </div>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
            <div>
                <RenderComments postId={post.id} 
                    comments={comments} setComments={setComments}/>
            </div>
        </div>
    )
}

export default PostListItem