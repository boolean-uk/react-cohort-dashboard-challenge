import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import AddPostForm from './AddPostForm'

function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/agrmet/post")
    .then((rs) => rs.json())
    .then((data) => setPosts(data.reverse()))
  }, []);

  return (
      <main>
        <AddPostForm />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </main>

  );
}

export default PostFeed;