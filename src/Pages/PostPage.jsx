import Comments from "./components/Comment/Comments";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRequest } from "../API";
import Users from "./components/Users";
import NewComment from "./components/Comment/NewComment";

export default function PostPage() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  const { postId } = useParams();

  useEffect(() => {
    const runEffect = async () => {
      const { data, error } = await getRequest(`/post/${postId}`);
      if (error === null) {
        setPost(data);
      } else {
        console.log(error);
      }
      setLoading(false);
    };
    runEffect();
  }, [postId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="post-card">
          <Users userId={post.contactId} />
          <h1>{post.title} </h1>
          <p className="post-content">{post.content}</p>
          <Comments postId={post.id} />
          <NewComment postId={post.id} />

          <button>
            <Link to={`/post/${postId}/modify`}>Modify</Link>
          </button>
          <button>
            <Link to={`/post/${postId}/delete`}>Delete</Link>
          </button>
        </div>
      )}
    </>
  );
}
