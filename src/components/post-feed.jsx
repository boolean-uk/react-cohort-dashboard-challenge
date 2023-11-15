import { useState, useEffect } from "react";
import Comments from "./comments";
import Post from "./post";
import NewPost from "./new-post";

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

  const handleNewPost = async (newPostContent) => {
    try {
      const response = await fetch(postURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: newPostContent }),
      });

      if (!response.ok) {
        throw new Error("Failed to create new post");
      }

      const createdPost = await response.json();
      setPosts([...posts, createdPost]); // Update posts with the new post
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
    <div className="posts-container">
      <div className="new-post">
        <NewPost onNewPost={handleNewPost} />
      </div>

      <div className="posts">
        {posts.map((post) => (
          <div key={post.id}>
            <Post post={post} />
            <div className="comments">
              <Comments postId={post.id} />
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default PostFeed;
