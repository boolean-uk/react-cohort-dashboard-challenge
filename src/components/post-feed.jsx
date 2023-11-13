import { useState, useEffect } from "react";
import { Link } from 'react'

const PostFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://boolean-api-server.fly.dev/api/post"
        );

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
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render posts
  return (
    <>
      TODO: Create new bost box instead of just button
      <div className="new-post">
        <Link to="/new-post"><button>post</button></Link>
      </div>


      TODO: Add comments to this via comments component
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

    </>
  );
};

export default PostFeed;
