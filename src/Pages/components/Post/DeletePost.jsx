import { deleteRequest } from "../../../API";
import { useNavigate, useParams } from "react-router-dom";

export default function DeletePost() {
  const { postId } = useParams();
  const navigate = useNavigate();

  async function deletePost() {
    const { error } = await deleteRequest(`/post/${postId}`);
    if (error) {
      console.log(error);
    } else {
      navigate(`/`);
    }
  }

  return (
    <div>
      <h1>Are you sure?</h1>
      <button onClick={deletePost}>Delete</button>
      <button onClick={() => navigate(`/post/${postId}`)}>Cancel</button>
    </div>
  );
}
