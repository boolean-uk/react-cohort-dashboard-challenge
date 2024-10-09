import { Link } from 'react-router-dom';
import AuthorCircle from './AuthorCircle';
import Comments from './Comments';

function Post({ post }) {
  return (
    <div className="post">
      <AuthorCircle authorId={post.contactId} />
      <Link to={`/post/${post.id}`}>
        <h3 className='title'>{post.title}</h3>
      </Link>
      <p>{post.content}</p>
      <Comments postId={post.id} />
    </div>
  );
}

export default Post;
