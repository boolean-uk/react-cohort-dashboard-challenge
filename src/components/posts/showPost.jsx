import { useParams } from "react-router-dom";
import { MyContext } from "../../App.jsx";
import { useContext, useEffect, useState } from "react";
import Comments from "../comments/comments";
import { useNavigate } from 'react-router-dom'

// show single post with all comments
function ShowPost(){

    const [post, setPost] = useState([])
    const [postContact, setPostContact] = useState({})
    const context = useContext(MyContext)
    const { postId } = useParams()
    const navigate = useNavigate();
    const [editPost, setEditPost] = useState({
        contactId: post.contactId,
        title: post.title,
        content: post.content,
    })

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

    useEffect(() => {
        if (post.contactId) {
            setEditPost({
                contactId: post.contactId,
                title: post.title,
                content: post.content,
            });
        }
    }, [post]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditPost(prevEditPost => ({
            ...prevEditPost,
            [name]: value,
        }));
    };

    const handleEdit = () => {
        console.log("Edit post");
        fetch(`${context.baseURL}/post/${postId}`,
            {method: 'PUT',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(editPost),
            })
        .then(response => response.json())
        .then(data => {
            console.log('Edited:', data);
            navigate(`/`)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    const handleDelete = () => {
        fetch(`${context.baseURL}/post/${postId}`,
        {method: 'DELETE'})
        .then(response => response.json())
        .then(data => {
        console.log('Deleted data:', data);
        })
        navigate(`/`)
    };


    return(
        <>
        <div className="yellow">
        <article>
            <h4>{postContact.firstName} {postContact.lastName}</h4>
            <div className="post-icon">
            <img src={postContact.profileImage}/>
            </div>
            <div>
                <h2>{post.title}</h2>
            </div>
            <div>
                <h4>{post.content}</h4>
            </div>
            {context.user.id === post.contactId && (
                <>
                    <input
                        type="text"
                        name="title"
                        value={editPost.title}
                        onChange={handleChange}
                        placeholder="Post Title"
                    />
                    <textarea
                        name="content"
                        value={editPost.content}
                        onChange={handleChange}
                        placeholder="Post Content"
                    />
                    <div>
                        <button onClick={handleEdit} className="submit-comment">Edit Post</button>
                        <button onClick={handleDelete} className="submit-comment">Delete Post</button>
                    </div>
                </>
            )}
        </article>
            <main className="purple">
                <Comments postId={postId} baseURL={context.baseURL} user={context.user} commentShowDefault={true} />
            </main> 
        </div>
        </>
    )


}
export default ShowPost