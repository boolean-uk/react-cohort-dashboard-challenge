import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function PostDetails() {
  const { navigate } = useNavigate()
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch the post data using postId
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));

    // Fetch the comments for the post
    fetch(`https://boolean-api-server.fly.dev/Callumhayden99/post/${postId}/comment`)
      .then(response => response.json())
      .then(data => setComments(data));
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>Comments:</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
         <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to="/">
                <button>Back to Home</button>
        </Link>
      </ul>
    </div>
  );
}

export default PostDetails;