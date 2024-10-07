import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import CommentList from './CommentList';
import './Styling/PostDetail.css';

function PostDetail() {
  const { postId } = useParams();
  const { posts, friendList } = useContext(AppContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/josteinruen/post/${postId}`)
        const data = await response.json()
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    };

    fetchPost();
  }, [postId]);

  if (!post || !friendList) {
    return <p>Loading...</p>;
  }

  const postAuthor = friendList.find(friend => friend.id === post.contactId);
  const initials = postAuthor ? `${postAuthor.firstName[0]}${postAuthor.lastName[0]}`.toUpperCase() : "NA";
  const authorName = postAuthor ? `${postAuthor.firstName} ${postAuthor.lastName}` : "Unknown";

  return (
    <div className="post-detail">
      <div className="post-author">
        <div className="post-author-initials" style={{ backgroundColor: postAuthor?.favouriteColour || "#64648c" }}>
          {initials}
        </div>
        <span className="post-author-name">{authorName}</span>
      </div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <CommentList postId={post.id} />
    </div>
  );
}

export default PostDetail;