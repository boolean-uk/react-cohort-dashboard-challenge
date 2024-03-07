import { useEffect, useState, useContext } from "react";

import * as API from "../../../../API/API";
import ProfileCircle from "../../../ProfileCircle/ProfileCircle";
import "./PostComment.css";
import TextEditor from "../../OriginalPost/TextEditor/TextEditor";
import { PostContext } from "../../PostItem";

function PostComment({ comment }) {
  const [commentUser, setCommentUser] = useState("");
  const { updateComments } = useContext(PostContext);

  const [edit, setEdit] = useState(false);

  const toggleEdit = () => setEdit(!edit);

  const getUser = () => {
    API.getUserById(comment.contactId)
      .then((res) => res.json())
      .then((userData) => {
        // console.log(userData);
        setCommentUser(userData);
      });
  };

  const updateComment = (newCommentText) => {
    API.updateComment(comment, newCommentText)
      .then((res) => res.json())
      .then((data) => {
        console.log("UpdatedComment", data);
        updateComments();
      });
  };
  const deleteComment = () =>
    API.deleteComment(comment)
      .then((res) => res.json())
      .then((data) => updateComments());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getUser(), []);
  return (
    <div className="d-flex my-3">
      <div className="mr-3">
        <ProfileCircle user={commentUser} />
      </div>
      <div className="chat-bubble">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6>
            <b>
              {commentUser.firstName} {commentUser.lastName}
            </b>
          </h6>
          <CommentButtons
            deleteComment={deleteComment}
            toggleEdit={toggleEdit}
          />
        </div>
        {!edit && <p>{comment.content}</p>}
        {edit && (
          <TextEditor
            originalText={comment.content}
            cancel={toggleEdit}
            UpdateApiCall={updateComment}
          />
        )}
      </div>
    </div>
  );
}

function CommentButtons({ deleteComment, toggleEdit }) {
  return (
    <div id="buttons">
      <button onClick={toggleEdit} className="btn mx-0">
        <small>Edit</small>
      </button>
      <button onClick={deleteComment} className="btn mx-0">
        <small>Delete</small>
      </button>
    </div>
  );
}

export default PostComment;
