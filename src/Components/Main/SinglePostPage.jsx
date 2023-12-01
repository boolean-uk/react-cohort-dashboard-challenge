import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProfileIcon from "../Header/ProfileIcon";
import { useEffect, useState } from "react";

export default function SinglePostPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (location.state) {
      setPost(location.state.post);
    }
  }, [location]);

  console.log(post);

  if (post) {
    return (
      <div className="single-post-container">
        <div className="post-header">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => navigate(`/posts`)} className="btn">
            Go Back
          </button>
        </div>
      </div>
    );
  }
}
