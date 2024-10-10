/* eslint-disable react/prop-types */
import PostItem from './PostItem';
import './App.css';

function PostList({ posts, authors, onNewComment }) {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} authors={authors} onNewComment={onNewComment} />
      ))}
    </div>
  );
}

export default PostList;