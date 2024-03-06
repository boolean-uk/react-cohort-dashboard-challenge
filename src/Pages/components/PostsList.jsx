import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRequest } from "../../API";
import Comments from "./Comments";
import Users from "./Users";

export default function PostsList() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest("/post");
      if (data) {
        let finalisedpost = data;
        setPost(finalisedpost);
      } else {
        console.error("Error fetching post:", error);
      }
      setLoading(false);
    };
    runEffect();
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && post.length === 0 && <p>No posts available.</p>}
      {!loading && (
        <div className="post-container">
          {post.map((post) => {
            return (
              <div key={post.id} className="post-card">
                <Users userId={post.contactId} />
                <h3>
                  <Link className="post-title" to={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="post-content">{post.content}</p>
                <Comments postId={post.id} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
