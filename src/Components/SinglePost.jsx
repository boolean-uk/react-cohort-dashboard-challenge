import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PostContext from "./PostContext";
import SingleComment from "./SingleComment";

function SinglePost({ post, author }) {
  const id = post.id;
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [newComments, setNewComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/JDC-horizons/post/${id}/comment`
        );
        let data = await response.json();
        setComments(data.reverse());
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id, newComments]);

  const { peopleData, focusPost, setFocusPost, loggedInUser, setFocusUser } =
    useContext(PostContext);

  const handleShowMore = () => {
    setShowAllComments((prevShowAllComments) => !prevShowAllComments);
  };
  const handleTitleClick = () => {
    setFocusPost(post);
  };
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleCommentClick = async () => {
    const commentData = {
      postId: post.id,
      content: userInput,
      contactId: 0,
    };
    try {
      const response = await fetch(
        `https://boolean-uk-api-server.fly.dev/JDC-horizons/post/${post.id}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(commentData),
        }
      );
    } catch (error) {
      console.error("Error:", error);
    }
    setNewComments([...newComments, commentData]);
    console.log(userInput);
  };

  const navigate = useNavigate();
  const handleProfileClick = () => {
    setFocusUser(author);
    navigate("/profile");
  };

  return (
    <div className="post-content">
      <p
        className="user-profile-button"
        onClick={handleProfileClick}
      >{`${author.firstName[0]} ${author.lastName[0]}`}</p>
      <div className="post-header">
        <p
          className="post-user-name"
          onClick={handleProfileClick}
        >{`${author.firstName} ${author.lastName}`}</p>
        <Link to={`/post`} onClick={handleTitleClick}>
          <p className="post-title">{post.title}</p>
        </Link>
      </div>
      <div className="post-text">
        <p>{post.content}</p>
      </div>
      <div className="post-comments">
        {!showAllComments && comments.length > 3 && !focusPost && (
          <button className="comments-toggle" onClick={handleShowMore}>
            See previous comments
          </button>
        )}
        {comments
          .slice(0, showAllComments || focusPost ? comments.length : 3)
          .map((comment, index) => {
            let commentAuthor = {};
            if (comment.contactId === 0) {
              commentAuthor = {
                firstName: loggedInUser.firstName,
                lastName: loggedInUser.lastName,
              };
            } else {
              commentAuthor = peopleData[comment.contactId - 1];
            }
            return (
              <SingleComment
                key={index}
                comment={comment}
                author={commentAuthor}
              />
            );
          })}
        <div className="comment-input">
          <p className="user-profile-button">{`${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`}</p>
          <input
            placeholder="Add a comment..."
            value={userInput}
            onChange={handleUserInput}
          ></input>
          <svg
            onClick={handleCommentClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
