import { useParams } from "react-router-dom";
import { MyContext } from "../../App.jsx";
import { useContext, useEffect, useState } from "react";
import Comments from "../comments/comments";


/* const MyContext = createContext() */

// show single post with all comments
function ShowPost(){

    const [post, setPost] = useState([])
    const [postContact, setPostContact] = useState({})
    const context = useContext(MyContext)
    const { postId } = useParams()

    useEffect(() => {
        if (postId) {
            fetch(`${context.baseURL}/post/${postId}`)
            .then((response) => response.json())
            .then((data) => setPost(data));

            if (post.contactId) {
                fetch(`${context.baseURL}/contact/${post.contactId}`)
                .then((response) => response.json())
                .then((data) => setPostContact(data));
            }
        }
    }, [context.baseURL, postId, post.contactId]);

    // get comments

    // get commentContact

    return(
        <>
        <div className="yellow">
        <article>
            <h4>{postContact.firstName} {postContact.lastName}</h4>
            <div className="post-icon">
                {/* Make this link to profile page */}
            <img src={postContact.profileImage}/>
            </div>
            <div>
                <h2>{post.title}</h2>
            </div>
            <div>
                <h4>{post.content}</h4>
            </div>
        </article>
            <main className="purple">
                <Comments postId={postId} baseURL={context.baseURL} user={context.user}/>
            </main> 
        </div>
        </>
    )


}
export default ShowPost