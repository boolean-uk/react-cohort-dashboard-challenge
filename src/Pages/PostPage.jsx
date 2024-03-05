import Comments from "./components/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRequest } from "../API";
//import ModifyPost from "./components/ModifyPost";

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
          <h1>{post.title} </h1>
          <p>{post.content}</p>
          <Comments postId={postId} />
        </>
      )}
      <button> Modify </button>
      <button> Delete </button>
    </>
  );
}
