import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://boolean-api-server.fly.dev/krzysztofmmm/post"
      );
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Post post={post} />
          {index < posts.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
