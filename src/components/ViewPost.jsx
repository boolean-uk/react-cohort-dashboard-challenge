import { useParams } from "react-router-dom"
import { useContext, useState, useEffect } from "react"

import { PostContext, ContactContext } from "../App"


function ViewPost() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const { posts } = useContext(PostContext)
    const { contacts } = useContext(ContactContext)

    //Hitta rätt post
    useEffect(() => {
        console.log('in view post: ' + id)
        if (posts && id) {
            setPost(posts.find((post) => Number(post.id) === Number(id)));
        }
    }, [posts, id]);

    //hämta alla comments
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/post/${id}/comment`)
            .then((response) => response.json())
            .then((result) => setComments(result || []));
    }, [])

    //vänta på att data 'contacts' har hämtats från api
    if (!contacts || contacts.length === 0) {
        return null;
    }

    //mappa contacts id mot post.contactId
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(post.contactId));
    if (!matchingContact) {
        return null; // or handle the case when matchingContact is undefined
    }
    
    const name = matchingContact.firstName + ' ' + matchingContact.lastName

    //placeholder innan posts hämtats. behövs här
    if (!post) return <div>Loading...</div>;

    return (
        <div className="red">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr />
            {comments &&
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            {name}
                            <br />
                            {comment.content}
                        </li>
                    ))}
                </ul>
            }

        </div>
    )
}

export default ViewPost