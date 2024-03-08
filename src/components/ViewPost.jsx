import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { PostContext, ContactContext } from "../App"

import CommentList from "./CommentList";
import circle from '../assets/yellow-and-amber-colored-circles-clipart-1.png'

function ViewPost() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([])
    const { id } = useParams();
    const { posts } = useContext(PostContext)
    const { contacts } = useContext(ContactContext)
    const navigate = useNavigate();

    //Hitta rätt post
    useEffect(() => {
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
    if (!contacts || contacts.length === 0 || !post) {
        return null;
    }


    //mappa contacts id mot post.contactId
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(post.contactId));
    const name = matchingContact.firstName + ' ' + matchingContact.lastName
    const initials = matchingContact.firstName.charAt(0) + matchingContact.lastName.charAt(0);

    const goToMain = () => {
        //navigera till dashboard
        navigate('/');
    }

    return (
        <div className="post">
            <button onClick={goToMain}>Go back</button>
            <div className='pic-and-name'>
                <div className='profile-container'>
                    <img className='profile-image' src={circle} alt="profile icon" />
                    <div className="profile-text">{initials}</div> 
                </div>

                <h2>{name}</h2>
            </div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <hr />
            {comments &&
                <CommentList comments={comments}/>
            }
        </div>
    )
}

export default ViewPost