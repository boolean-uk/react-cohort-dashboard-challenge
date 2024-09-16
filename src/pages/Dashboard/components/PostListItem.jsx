import { UserContext, PostContext } from "../../../App";
import { useContext, useEffect, useState, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment.jsx";
import PostListItemForm from "./PostListItemForm.jsx";
import PropTypes from "prop-types";

const CommentContext = createContext();
function PostListItem(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const { activeUser, users } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const { post, single } = props;
  const [actualPost, setActualPost] = useState(post);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    if (!post.id) {
      setIsLoading(false);
      return;
    }
    fetch(
      `https://boolean-api-server.fly.dev/AlexanderNiklasson/post/${post.id}/comment`
    )
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        console.log("Comments loaded");
      });
    setIsLoading(false);
  }, []);
  const author = users.find((user) => user.id === post.contactId);
  //Post request comments
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div
      style={single === true ? { marginTop: "90px" } : { marginTop: "0px" }}
      className="post-list-item">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(
            `https://boolean-api-server.fly.dev/AlexanderNiklasson/post/${actualPost.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(actualPost),
            }
          ).then(() => {
            setEdit(false);
          });
        }}>
        <div className="post-list-item-header">
          <Link to={`/profile/${author.id}`}>
            <div
              className="create-post-profile"
              style={{ backgroundColor: author.favouriteColour }}>
              <h2>
                {author.firstName.charAt(0)}
                {author.lastName.charAt(0)}
              </h2>
            </div>
          </Link>
          <div>
            <Link to={`/profile/${author.id}`}>
              <h3>
                {author.firstName} {author.lastName}
              </h3>
            </Link>
            {edit ? (
              <input
                type="text"
                value={actualPost.title}
                onChange={(e) =>
                  setActualPost({ ...actualPost, title: e.target.value })
                }
              />
            ) : (
              <Link to={`/post/${actualPost.id}`}>
                <p>{actualPost.title}</p>
              </Link>
            )}
          </div>
          {edit && <button hidden={true} type="submit"></button>}
        </div>
        <div className="post-list-item-content">
          {edit ? (
            <input
              type="text"
              value={actualPost.content}
              onChange={(e) =>
                setActualPost({ ...actualPost, content: e.target.value })
              }
            />
          ) : (
            <p>{actualPost.content}</p>
          )}
        </div>
      </form>
      <CommentContext.Provider
        value={{
          comments: comments,
          setComments: setComments,
          post: post,
        }}>
        {showMore === true || (comments.length > 0 && comments.length <= 3) ? (
          <div className="post-list-item-comments">
            <hr />
            <ul>
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="post-list-item-comments">
            <hr />
            {comments.length > 3 && (
              <a
                className="post-list-show-more"
                onClick={() => setShowMore(true)}>
                See previous comments
              </a>
            )}

            <ul>
              {comments.slice(comments.length - 3).map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ul>
          </div>
        )}
        <PostListItemForm />

        {post.contactId === activeUser.id && !edit && (
          <div className="post-edit-delete-buttons">
            <button
              className="post-edit-delete"
              onClick={() => {
                fetch(
                  `https://boolean-api-server.fly.dev/AlexanderNiklasson/post/${post.id}`,
                  {
                    method: "DELETE",
                  }
                )
                  .then((res) => res.json())
                  .then(() => {
                    setPosts(posts.filter((p) => p.id !== post.id));
                    if (single === true) navigate(`/`);
                  });
              }}>
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

            <button className="post-edit-delete" onClick={() => setEdit(true)}>
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
      </CommentContext.Provider>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  single: PropTypes.bool,
};

export { PostListItem, CommentContext };
