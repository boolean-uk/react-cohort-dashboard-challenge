import "/src/style/PostItem.css"
import {useEffect, useState} from "react"
import {Link} from "react-router-dom";
import CommentItem from "./CommentItem";

export default function PostItem ({ post }) {
    const [comments, setComments] = useState([])
    const [contact, setContact] = useState([])
    const [commentLimit, setCommentLimit] = useState(3)
    const [showMore, setShowMore] = useState(false)

    if(showMore){
      setCommentLimit(comments.length);
    }
    
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/post/${post.id}/comment`)
        .then((response) => response.json())
        .then((data) => setComments(data.slice(0, commentLimit)))
    }, []);

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/StianNordvik/contact/${post.contactId}`)
        .then((response) => response.json())
        .then((data) => setContact(data))
    }, []);



    return (
        <div className="postItem">
          <Link to={`/profile/${contact.id}`}>
            <img src={contact.profileImage} className="profileImage"></img>
            
            <b> {contact.firstName} {contact.lastName}</b>
          </Link>
            <p>             
            </p>
            <p>
                <b>{post.title}</b>
            </p>
            <p>
                {post.content}
            </p>
            <p>
                <div className="comments">
                <b> Comments: </b>
                  {comments.map((comment, index) => (
                    <CommentItem key={index} comment={comment} />
                  ))}  
                </div>
 
            </p>
        </div>
    )

}