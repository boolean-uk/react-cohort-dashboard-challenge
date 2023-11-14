import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import Comments from "./comments";
import Post from "./post";

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postURL = "https://boolean-api-server.fly.dev/api/post";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(postURL);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postURL]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {/* TODO: Create new post box instead of just a button */}
      <div className="new-post">
        <Link to="/new-post"><button>Post</button></Link>
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id}>
            <Post posts={post} /> {/* Pass each post data to the Post component */}
            <div className="comments">
              <Comments postId={post.id} /> {/* Pass postId to the Comments component */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostFeed;
