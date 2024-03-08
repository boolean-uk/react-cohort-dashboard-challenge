import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { ContactContext } from '../App.jsx'

import CommentList from './CommentList.jsx';


function Post({ post }) {
    const { contacts } = useContext(ContactContext)
    const [newComment, setNewComment] = useState({ postId: post.id, content: '', contactId: post.contactId })
    const [comments, setComments] = useState([])

    //hämta comments till post
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((result) => setComments(result || []));
    }, [])

    //vänta på att data 'contacts' har hämtats från api
    if (!contacts || contacts.length === 0) {
        return null;
    }

    //mappa contacts id mot post.contactId
    const matchingContact = contacts.find(contact => Number(contact.id) === Number(post.contactId));
    const name = matchingContact.firstName + ' ' + matchingContact.lastName
    const initials = matchingContact.firstName.charAt(0) + matchingContact.lastName.charAt(0);

    //set content i ny comment
    const handleChange = (e) => {
        //set content
        setNewComment((prevComment) => ({
            ...prevComment,
            content: e.target.value,
        }));
    }

    //spara comment
    const saveComment = (e) => {
        e.preventDefault()

        //Skicka POST request till api att lägga till ny comment
        fetch(`https://boolean-api-server.fly.dev/alexandra7667/post/${post.id}/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        })

        //re-rendera comments
        setComments((comment) => [...comment, newComment]);

        //clear input
        setNewComment({ postId: '', content: '', contactId: 0 })
    }


    return (
        <li className='post'>
            <div className='pic-and-name'>
                <div className='profile-container'>
                    <div
                        className="profile_circle"
                        style={{ backgroundColor: matchingContact.favouriteColour }}>
                        <div className="profile-text">{initials}</div>
                        </div>
                    </div>

                    <h2>{name}</h2>
                </div>

                <Link to={`/posts/${post.id}`}>
                    <h3 className='post-title'>{post.title}</h3>
                </Link>
                <p>{post.content}</p>
                <hr />

                {comments &&
                    <CommentList comments={comments} />
                }

                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment.content}
                    onChange={handleChange}
                />
                <button
                    className='comment-post-button'
                    onClick={saveComment}>
                    Comment
                </button>
        </li>
    )
}

export default Post