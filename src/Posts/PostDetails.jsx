import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CommentList from '../Comments/CommentList';
export default function PostDetails(props) {
    const {posts, contacts} = props
    const { id } = useParams();
    const postId = parseInt(id)
    console.log('props in postDetails: ', posts)

    //state to set posts & comments
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([]);
    const navigate = useNavigate()
    //URL to fetch comments
    const GET_COMMENTS = "https://boolean-api-server.fly.dev/OnealLane/post/" 
    + id
    + "/comment";


    useEffect(() => {
        const matchingPost = posts.find((post) => (post.id) === (postId));
        setPost(matchingPost);
    }, [id, post])

    useEffect(() => {
        fetch(GET_COMMENTS)
        .then((response) => response.json())
        .then((responseData) => {
        setComments(responseData)
        });
    }, []);

    const handleGoBack = () => {
        navigate(-1)
    }

    //add new comments in the detailed postPage
    const handleAddComments = (newComment) => {
        setComments(prevComments => [...prevComments, newComment]);
    };

    if (!post) return <p>Loading...</p>

    return (
        <article>
        <h2>
            {post.title} {}
        </h2>
        {post.content}
        <CommentList comments={comments} contacts={contacts} onAddComment={handleAddComments} postId={postId}/>
        <button onClick={handleGoBack}>Return to Home</button>
        </article>
    )
    }

