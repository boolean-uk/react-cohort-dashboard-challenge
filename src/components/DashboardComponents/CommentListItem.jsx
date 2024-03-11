import { DataContext } from "../../App";
import { useContext, useEffect, useState } from "react";
import ProfileAvatar from "../ProfileAvatar";

export default function CommentListItem({ comment, setComments, comments }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;
  const [commentUser, setCommentUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment)

  const deleteComment = () => {
    console.log("DELETE");
    fetch(
      "https://boolean-api-server.fly.dev/pkekkonen/post/" +
        comment.postId +
        "/comment/" +
        comment.id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setComments(comments.filter((c) => c.id !== responseData.id));
      });
  };

  const editComment = () => {
    setEditing(true);
  };

  const save = () => {
    setEditing(false);
        fetch(
          "https://boolean-api-server.fly.dev/pkekkonen/post/" +
            comment.postId +
            "/comment/" +
            comment.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedComment)
          }
        )
          .then((response) => {
            return response.json();
          })
          .then((responseData) => {
            console.log(responseData);
            setComments(comments.map((c) => c.id === responseData.id? {...c, content: editedComment.content}: c));
          });
  };

  useEffect(() => {
    if (users) {
      const foundUser = users.find((u) => u.id === Number(comment.contactId));
      setCommentUser(foundUser);
      comment.user = foundUser;
    }
  }, [comment, users]);

  if (!comment) return;

  return (
    <>
      {commentUser && (
        <div className="comment">
          <ProfileAvatar
            user={commentUser}
            className="circle header-top post-circle"
          />

          <div className="comment-box">
            <p className="comment-user-name">
              {commentUser.firstName + " " + commentUser.lastName}
            </p>
            <span>
              {!editing && <p>{comment.content}</p>}
              {editing && (
                <input
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={(event) => setEditedComment({...editedComment, content: event.target.value})}
                  value={editedComment.content}
                />
              )}
            </span>
          </div>
          {!editing && (
            <div className="comment-buttons">
              <div></div>
              <button onClick={editComment}>Edit</button>
              <button onClick={deleteComment}>Delete</button>
            <div></div>
            </div>
          )}
          {editing && (
            <div className="comment-buttons-editing">
              <button onClick={save}>Save</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
