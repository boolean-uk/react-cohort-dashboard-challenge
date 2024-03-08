import { useState, useEffect } from "react";
import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "../../../../App.jsx";
import CommentItem from "./CommentItem.jsx";
export default function ViewPost() {
  const [postComments, setPostComments] = useState([]);
  const [postUser, setPostUser] = useState({ firstName: "", lastName: "" });
  const [post, setPost] = useState({});
  const { posts, currentUser, users } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

  //Fetch comments
  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/knutsr0501/post/${id}/comment`)
      .then((response) => response.json())
      .then((item) => setPostComments(item));
  }, []);

  useEffect(() => {
    //Find the current post
    const thisPost = posts.find(
      (postItem) => Number(postItem.id) === Number(id)
    );
    //If currentpost exists, set the useState to the post and find the user who posted it
    if (thisPost) {
      setPost(thisPost);
      const theUser = users.find(
        (useritem) => Number(useritem.id) === Number(thisPost.contactId)
      );
      if (theUser) {
        setPostUser(theUser);
      }
    }
  }, [id, posts, users]);

  const handleClick = (event) => {
    navigate(`/home/${currentUser.id}`);
  };

  const indexFirst = postUser.firstName[0];
  const indexLast = postUser.lastName[0];

  return (
    <div className="post-div">
      <button onClick={handleClick}>Go back!</button>
      <div className="container-img-h2">
        <div
          className="profile-icon-div"
          style={{
            backgroundColor: postUser.favouriteColour,
          }}
        >
          {indexFirst} {indexLast}
        </div>
        <h2>
          {postUser.firstName} {postUser.lastName}
        </h2>
      </div>
      <div>
        <p>{post.title}</p>
        <p>{post.content}</p>
      </div>
      <div className="comments-div">
        <ul>
          {postComments.map((comment, index) => {
            const commentUser = users.find(
              (useritem) => Number(useritem.id) === Number(comment.contactId)
            );
            return (
              <CommentItem
                comment={comment}
                key={index}
                commentUser={commentUser}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
