import { useEffect, useState, createContext } from "react"
import { Link } from 'react-router-dom';
import Comments from '../comments/comments.jsx'

const MyContext = createContext()

function Post({ post, baseURL, user }) {

    const [postContact, setPostContact] = useState([])

    // fetch contact from post contact id
    useEffect(() => {
        fetch(`${baseURL}/contact/${post.contactId}`)
        .then((response) => response.json())
        .then((data) => setPostContact(data));
        }, [baseURL, post]);

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
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </div>
            <div>
                <h4>{post.content}</h4>
            </div>
        </article>
            <main className="purple">
                <Comments postId={post.id} baseURL={baseURL} user={user}/>
            </main> 
        </div>
        </>

        /* Get comments from post id, 
        And get contact id for comment from:
        contactID in comment*/

    )
}
export default Post