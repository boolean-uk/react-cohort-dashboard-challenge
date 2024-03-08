import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import CommentListItem from "./CommentListItem";
import { Link } from "react-router-dom";

function PostListItem(props) {
  const { post, postUser } = props;
  const [comments, setComments] = useState([]);

  const getComments = () => {
    fetch(`https://boolean-api-server.fly.dev/StevenTPh/post/${post.id}/comment
    `)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);
  const context = useContext(MyContext);

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  const initials = getInitials(postUser.firstName, postUser.lastName);

  return (
    <div className="post">
      <div className="post-top">
        <div
          className="header-profile-icon"
          style={{ backgroundColor: postUser.favouriteColour }}
        >
          {initials}
        </div>
        <p>
          {postUser.firstName}
          {postUser.lastName}
        </p>
        <p><Link to={`/view/${post.id}`}>{post.title}</Link></p>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>
      <div className="post-comment">
        <ul>
          {comments.map((comment, index) => {
            const commentUser = context.contacts.find(
              (person) => person.id == Number(comment.contactId)
            );
            return (
              <CommentListItem
                key={index}
                comment={comment}
                commentUser={commentUser || null}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PostListItem;
