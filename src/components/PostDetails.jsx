import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { deletePost } = useContext(DataContext);
  const [postDetails, setPostDetails] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const postResult = await axios(
          `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}`
        );
        setPostDetails(postResult.data);
        const commentsResult = await axios(
          `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`
        );
        setComments(commentsResult.data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    fetchPostDetails();
  }, [postId]);

  const handleDeletePost = () => {
    deletePost(postId);
    navigate("/");
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://boolean-api-server.fly.dev/krzysztofmmm/post/${postId}/comment`,
        {
          content: newComment,
          postId: Number(postId),
          contactId: 1,
        }
      );
      setComments([...comments, { content: newComment }]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!postDetails) return <p>Loading...</p>;

  return (
    <div>
      <h2>{postDetails.title}</h2>
      <p>{postDetails.content}</p>
      <button onClick={handleDeletePost}>Delete Post</button>
      <form onSubmit={handleAddComment}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <p key={index}>{comment.content}</p>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
