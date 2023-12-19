import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Postpagelistitem from "../Postpage/Postpagelistitem";

const API_BASE_URL = "https://boolean-api-server.fly.dev";

export default function PostPageSection() {
  const [post, setPost] = useState(null);
  const navigator = useNavigate();
  const { postid } = useParams();

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await fetch(
        `${API_BASE_URL}/Elizabethcodes44/post/${postid}`
      );
      const data = await response.json();
      setPost(data);
    };

    fetchSinglePost();
  }, [API_BASE_URL, postid]);

  if (post) {
    return (
      <div className="postpage">
        <button onClick={() => navigator(-1)}>Back</button>
        <Postpagelistitem post={post} API_BASE_URL={API_BASE_URL} />
      </div>
    );
  }

  return null;
}
