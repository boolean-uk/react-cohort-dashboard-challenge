import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';
import '../style/dash.css';

function PostView() {
const {data, contacts} = useContext(MyContext);
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const foundPost = data.find(item => item.id.toString() === postId);
    if (foundPost) {
      setPost(foundPost);
      const foundAuthor = contacts.find(contact => contact.id === foundPost.contactId);
      setAuthor(foundAuthor);
    }
  }, [data, contacts, postId]);

  useEffect(() => {
    if (postId) {
      fetch(`https://boolean-api-server.fly.dev/ateeb020301/post/${postId}/comment`)
        .then(response => response.json())
        .then(setComments)
        .catch(console.error);
    }
  }, [postId]);

  if (!post || !author) {
    return <div>Loading post...</div>;
  }

  return (
    <div className='post-card'>
      <h2>{author ? `${author.firstName} ${author.lastName}` : 'Unknown'}</h2>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className='commentBoks'>
        <h4>Comments:</h4>
        {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>No comments.</p>
      )}
      </div>
     
    </div>
  );
}

export default PostView;
