import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchDataForComments } from "../../utils/api";
import { basePostURL } from "../../utils/urls";
import { postData } from "../../utils/api";
import UserCircle from "../UserCircle";

function CommentsListItem(props) {
  const { post } = props;

  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [content, setContent] = useState("");

  const userFirstName = localStorage.getItem("userFirstName");
  const userLastName = localStorage.getItem("userLastName");
  const userfavouriteColour = localStorage.getItem("favouriteColour");

  useEffect(() => {
    fetchDataForComments(post.id).then(({ comments, users }) => {
      setComments(comments);
      setUsers(users);
    });
  }, [post.id]);

  const handleSendComment = async () => {
    const postId = post.id;
    const contactId = localStorage.getItem("contactId");

    const payload = {
      postId,
      content,
      contactId: parseInt(contactId),
    };

    const success = await postData(`${basePostURL}/${postId}/comment`, payload);

    if (!success) {
      console.error("OBS!!! Something went wrong creating a comment");
    } else {
      fetchDataForComments(post.id).then(({ comments, users }) => {
        setComments(comments);
        setUsers(users);
      });
    }

    setContent("");
  };

  return (
    <>
      <div className="post-comments">
        <h3>See previous comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={comment.id}>
              <div className="comment-card">
                <UserCircle
                  userFirstName={users[index]?.firstName}
                  userLastName={users[index]?.lastName}
                  userfavouriteColour={users[index]?.favouriteColour}
                />
                <h4>
                  <Link to={`/profile/${users[index]?.id}`}>
                    {" "}
                    {users[index]?.firstName} {users[index]?.lastName}
                  </Link>
                </h4>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>
        <div id="comment-post-card">
          <UserCircle
            userFirstName={userFirstName}
            userLastName={userLastName}
            userfavouriteColour={userfavouriteColour}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Add a comment..."
          ></input>
          <span
            className="material-symbols-outlined"
            onClick={handleSendComment}
          >
            send
          </span>
        </div>
      </div>
    </>
  );
}

CommentsListItem.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
};

export default CommentsListItem;
