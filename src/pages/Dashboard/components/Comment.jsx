import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { CommentContext } from "../components/PostListItem.jsx";
import { useContext, useState } from "react";
import PropTypes from "prop-types";

export default function Comment({ comment }) {
  const { users, activeUser } = useContext(UserContext);
  const { comments, setComments, post } = useContext(CommentContext);
  const user = users.find((user) => user.id === comment.contactId);
  const [edit, setEdit] = useState(false);
  const deleteComment = () => {
    fetch(
      `https://boolean-api-server.fly.dev/AlexanderNiklasson/post/${post.id}/comment/${comment.id}`,
      {
        method: "DELETE",
      }
    ).then(() => {
      setComments(comments.filter((c) => c.id !== comment.id));
    });
  };
  return (
    <li className="post-list-item-container" key={comment.id}>
      <Link to={`/profile/${user.id}`}>
        <div
          className="create-post-profile"
          style={{
            backgroundColor: user.favouriteColour,
          }}>
          <h2>
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </h2>
        </div>
      </Link>
      <div className="post-list-item-comment-container">
        <div className="post-list-item-comment-item">
          <Link to={`/profile/${user.id}`}>
            <p id="name">
              {user.firstName} {user.lastName}
            </p>
          </Link>
          {!edit ? (
            <p id="content">{comment.content}</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                fetch(
                  `https://boolean-api-server.fly.dev/AlexanderNiklasson/post/${post.id}/comment/${comment.id}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(comment),
                  }
                ).then(() => {
                  setEdit(false);
                });
              }}>
              <input
                type="text"
                value={comment.content}
                onChange={(e) => {
                  setComments(
                    comments.map((c) =>
                      c.id === comment.id
                        ? { ...c, content: e.target.value }
                        : c
                    )
                  );
                }}
              />
              <button hidden={true} type="submit" />
            </form>
          )}
        </div>
        {activeUser.id === comment.contactId && !edit && (
          <div>
            <button className="comment-edit-delete" onClick={deleteComment}>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 6.77273H9.2M19 6.77273H14.8M9.2 6.77273V5.5C9.2 4.94772 9.64772 4.5 10.2 4.5H13.8C14.3523 4.5 14.8 4.94772 14.8 5.5V6.77273M9.2 6.77273H14.8M6.4 8.59091V15.8636C6.4 17.5778 6.4 18.4349 6.94673 18.9675C7.49347 19.5 8.37342 19.5 10.1333 19.5H13.8667C15.6266 19.5 16.5065 19.5 17.0533 18.9675C17.6 18.4349 17.6 17.5778 17.6 15.8636V8.59091M9.2 10.4091V15.8636M12 10.4091V15.8636M14.8 10.4091V15.8636"
                  stroke="#464455"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="comment-edit-delete"
              onClick={() => setEdit(true)}>
              <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5H9C7.11438 5 6.17157 5 5.58579 5.58579C5 6.17157 5 7.11438 5 9V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H15C16.8856 19 17.8284 19 18.4142 18.4142C19 17.8284 19 16.8856 19 15V12M9.31899 12.6911L15.2486 6.82803C15.7216 6.36041 16.4744 6.33462 16.9782 6.76876C17.5331 7.24688 17.5723 8.09299 17.064 8.62034L11.2329 14.6702L9 15L9.31899 12.6911Z"
                  stroke="#464455"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    contactId: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
