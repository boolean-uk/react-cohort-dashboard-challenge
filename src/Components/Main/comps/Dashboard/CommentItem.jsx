import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
export default function CommentItem(props) {
  const indexFirst = props.commentUser.firstName[0];
  const indexLast = props.commentUser.lastName[0];
  const [canUpdate, setCanUpdate] = useState(false);
  const [currentlyUpdating, setCurrentlyUpdating] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [updateComment, setUpdateComment] = useState({});
  const { id } = useParams();

  //Useeffect for able to update (and delete)
  useEffect(() => {
    if (Number(id) === Number(props.comment.contactId)) {
      setCanUpdate(true);
    } else if (Number(id) !== Number(props.comment.contactId)) {
      setCanUpdate(false);
    }
  }, []);

  const handleDelete = (event) => {
    //currently doesnt update the page after deletion
    fetch(
      `https://boolean-api-server.fly.dev/knutsr0501/post/${Number(
        props.post.id
      )}/comment/${Number(props.comment.id)}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleUpdate = (event) => {
    setCurrentlyUpdating(true);
    setUpdateComment(props.comment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateComment.content = newContent;

    fetch(
      `https://boolean-api-server.fly.dev/knutsr0501/post/${Number(
        props.post.id
      )}/comment/${Number(props.comment.id)}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateComment),
      }
    );
  };
  console.log("current:", currentlyUpdating);
  console.log("updatecomm:", updateComment);
  return (
    <li>
      <div className="container-img-h3">
        <Link to={`/profile/${props.commentUser.id}`}>
          <div
            className="profile-icon-div"
            style={{
              backgroundColor: props.commentUser.favouriteColour,
            }}
          >
            {indexFirst}
            {indexLast}
          </div>
        </Link>
        <Link to={`/profile/${props.commentUser.id}`}>
          <h3>{props.commentUser.firstName}</h3>
        </Link>

        {canUpdate && (
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
      <div className="comment-content">
        {currentlyUpdating ? (
          <div className="create-comment">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="postComment"
                name="postComment"
                onChange={(e) => setNewContent(e.target.value)}
                value={newContent}
              />
              <input type="submit" value="Update" />
            </form>
          </div>
        ) : (
          <p>{props.comment.content}</p>
        )}
      </div>
    </li>
  );
}
