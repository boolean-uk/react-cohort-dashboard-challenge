import { useEffect, useState, createContext } from "react"
import Comments from '../comments/comments.jsx'

const MyContext = createContext()

function Post({ post, baseURL }) {

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
                <h4>{post.title}</h4>
            </div>
            <div>
                <h4>{post.content}</h4>
            </div>
        </article>
        <MyContext.Provider value={{ post: post, baseURL: baseURL }} >
            <main className="purple">
                <Comments />
            </main> 
        </MyContext.Provider>
        </div>
        </>

        /* Get comments from post id, 
        And get contact id for comment from:
        contactID in comment*/

    )
}
export { Post, MyContext}