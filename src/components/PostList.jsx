import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostContext } from '../App'; 
import { PostListItem } from './PostListItem';

export default function PostList() {
  const { posts } = useContext(PostContext);
  const reversedPosts = [...posts].reverse();
  const { id } = useParams();

  if (id) {
    const post = posts.find((post) => post.id === parseInt(id));
    if (post) {
      return (
        <div className="post-list">
          <ul>
            <li>
              <PostListItem single={true} post={post} />
            </li>
          </ul>
        </div>
      );
    } else {
      
      return <div>Post not found</div>;
    }
  }

  // If no id is provided, display the list of all posts
  return (
    <div className="post-list">
      <ul>
        {reversedPosts.map((post) => (
          <li key={post.id}>
            <PostListItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
