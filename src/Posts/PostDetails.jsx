import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CommentList from '../Comments/CommentList';

function PostDetails(props) {
    const {posts, contacts} = props
    const { id } = useParams();
    const postId = parseInt(id)
    console.log('props in postDetails: ', posts)

    //state to set posts & comments
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([]);

    //URL to fetch comments
    const GET_COMMENTS = "https://boolean-api-server.fly.dev/guro18/post/" 
    + id
    + "/comment";
    
    // fetch posts & comments
    useEffect(() => {
        console.log("fetch post with id= ", postId);
        const matchingPost = posts.find((post) => (post.id) === (postId));
        console.log("matching post", matchingPost);
        setPost(matchingPost);
    }, [postId, post])

    useEffect(() => {
        fetch(GET_COMMENTS)
        .then((response) => response.json())
        .then((responseData) => {
        setComments(responseData)
        });
    }, [id]);

    //add new comments in the detailed postPage
    const handleAddComments = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
    };

    if (!post) return <p>Loading...</p>

    return (
        <article>
        <h2>
            {post.title}
        </h2>
        {post.content}
        <CommentList comments={comments} contacts={contacts} onAddComment={handleAddComments} postId={postId}/>
        </article>
    )
    }

export default PostDetails