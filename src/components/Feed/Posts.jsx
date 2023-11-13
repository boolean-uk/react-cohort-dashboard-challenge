import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [post, setPost] = useState(null);
    const [contactData, setContactData] = useState([]);
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const [newCommentContent, setNewCommentContent] = useState('');

    useEffect(() => {
        const fetchPostAndComments = async () => {
            try {
                // Fetch post details
                const postResponse = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/${postId}`);
                if (!postResponse.ok) {
                    throw new Error("Network response for post was not ok");
                }
                const postData = await postResponse.json();
                setPost(postData);

                // Fetch contact details
                const contactsResponse = await fetch('https://boolean-api-server.fly.dev/irlydo/contact');
                if (!contactsResponse.ok) {
                    throw new Error("Network response for contacts was not ok");
                }
                const contactsData = await contactsResponse.json();
                setContactData(contactsData);

                // Fetch comments associated with the post
                const commentsResponse = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/${postId}/comment`);
                if (!commentsResponse.ok) {
                    throw new Error("Network response for comments was not ok");
                }
                const commentsData = await commentsResponse.json();
                setComments(commentsData);
            } catch (error) {
                console.error("Error fetching post, contact, or comment data:", error);
            }
        };

        fetchPostAndComments();
    }, [postId]);

    const handleCommentSubmit = async (postId) => {
        try {
            if (!postId) {
                console.error('postId is required for submitting a comment');
                return;
            }

            const response = await fetch(`https://boolean-api-server.fly.dev/irlydo/post/${postId}/comment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: newCommentContent,
                    contactId: 1,
                    postId: postId,
                }),
            });
            const newComment = await response.json();

            setComments((prevData) => [...prevData, newComment]);

            setNewCommentContent('');
        } catch (error) {
            console.error('Error submitting comment:', error);
        }
    };
    if (!post || !post.contactId) {
        return <div>Loading...</div>;
    }

    const contact = contactData.find((contact) => contact.id === post.contactId);

    if (!contact || !contact.firstName || !contact.lastName) {
        return <div>Error: Invalid contact data</div>;
    }
    const initials = `${contact.firstName[0]}${contact.lastName[0]}`;

    return (
        <ul>
            <li className='post'>
                <div className='post-header'>
                    <p className='initials'>{initials}</p>
                    <div className="author-and-title">
                        <h3 className='full-name'>{contact.firstName} {contact.lastName}</h3>
                        <h5>{post.title}</h5>
                    </div>
                </div>
                <p className='post-content'>{post.content}</p>
                <hr></hr>

                <ul>
                    {comments.map((comment) => {
                        const commentAuthor = contactData.find((contact) => contact.id === comment.contactId);
                        return (
                            <li className="comment-section" key={comment.id}>
                                <p className='commenter-initials'>{`${commentAuthor.firstName[0]}${commentAuthor.lastName[0]}`}</p>
                                <div className="comment-name-and-content">
                                    <p className='commenter-name'>{`${commentAuthor.firstName} ${commentAuthor.lastName}`}</p>
                                    <p>{comment.content}</p>
                                </div>
                            </li>
                        );
                    })}
                    <hr></hr>
                    <input type="text" placeholder="Add comment" value={newCommentContent} onChange={(e) => setNewCommentContent(e.target.value)}></input>
                    <button type="button" onClick={() => handleCommentSubmit(post.id)}>Submit</button>
                </ul>
            </li>
        </ul>
    );
}
export default Post;
