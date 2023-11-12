import { Link } from "react-router-dom";
import Submit from "../assets/Submit.svg";

function EachPost({
  post,
  contacts,
  postComments,
  mainUserInitials,
  handleSubmit,
  commentInputs,
  handleCommentChange,
}) {
  const contact = contacts.find((c) => c.id === post.contactId);
  let initials = "";
  if (contact) {
    initials = `${contact.firstName[0]} ${contact.lastName[0]}`;
  }

  return (
    <li key={post.id} className="full-comment-li">
      <div className="comment-title">
        <div className="post-initials">{initials}</div>
        {contact ? `${contact.firstName} ${contact.lastName}` : ""}
      </div>

      <Link to={`/comments/${post.id}`}>
        <div className="comment-link">{post.title}</div>
      </Link>

      <div className="main-comment">{post.content}</div>
      <hr className="hr"></hr>
      <div className="other-comments">
        {postComments[post.id]?.map((comment) => {
          const commenter = contacts.find((c) => c.id === comment.contactId);
          const initials = commenter
            ? `${commenter.firstName[0]} ${commenter.lastName[0]}`
            : "";
          return (
            <div key={`${post.id} ${comment.id}`} className="other-comment">
              <div className="post-initials">{initials}</div>
              <div className="other-comments-post">
                <div className="comment-post-name">
                  {commenter
                    ? `${commenter.firstName} ${commenter.lastName}`
                    : ""}
                </div>
                <div className="comment-content-post">{comment.content}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="form">
        <form
          onSubmit={(e) => handleSubmit(e, post.id)}
          className="comment-form"
        >
          <label>
            <div className="user-comment-logo">{mainUserInitials}</div>
            <input
              className="input"
              type="text"
              id=""
              name=""
              placeholder="Add a comment..."
              value={commentInputs[post.id] || ""}
              onChange={(e) => handleCommentChange(post.id, e.target.value)}
            />
          </label>
          <button className="post-button" type="submit">
            <img src={Submit} width={20} alt="submit button" />
          </button>
        </form>
      </div>
    </li>
  );
}

export default EachPost;
