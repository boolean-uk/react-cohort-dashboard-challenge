import Comments from "./components/Comments";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRequest } from "../API";
import Users from "./components/Users";

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
        <>
          <Users userId={post.contactId} />
          <h1>{post.title} </h1>
          <p>{post.content}</p>
          <Comments postId={postId} />
        </>
      )}
      <button>
        <Link to={`/post/${postId}/modify`}>Modify</Link>
      </button>
      <button>
        <Link to={`/post/${postId}/delete`}>Delete</Link>
      </button>
    </>
  );
}
