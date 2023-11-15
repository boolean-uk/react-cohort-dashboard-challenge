import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function PostDetail() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  // 3. useEffect
  useEffect(() => {
    fetchData();
    fetchComments();
  }, []);

  // 2. Fetch post

  const fetchData = () => {
    fetch(`https://boolean-api-server.fly.dev/ps975076/post/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
  };

  const fetchComments = () => {
    fetch(`https://boolean-api-server.fly.dev/ps975076/post/${id}/comment`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
      });
  };

  return (
    <div>
      <h1>Details</h1>
      {/* post details */}
      <Comments comments={comments} />
    </div>
  );
}

export default PostDetail;
