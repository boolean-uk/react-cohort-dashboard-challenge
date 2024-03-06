import { UserContext } from "../../../App";
import { useContext, useEffect, useState, createContext } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment.jsx";
import PostListItemForm from "./PostListItemForm.jsx";

const CommentContext = createContext();
function PostListItem({ post }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const { activeUser } = useContext(UserContext);
  const { users } = useContext(UserContext);

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
      });
    setIsLoading(false);
  }, []);

  const author = users.find((user) => user.id === post.contactId);
  console.log(post);
  //Post request comments

  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div className="post-list-item">
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
          <h3>
            {author.firstName} {author.lastName}
          </h3>
          <p>{post.title}</p>
        </div>
      </div>
      <div className="post-list-item-content">
        <p>{post.content}</p>
      </div>
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
              {comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
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
              {comments.slice(comments.length - 3).map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </ul>
          </div>
        )}
        <PostListItemForm />
      </CommentContext.Provider>
    </div>
  );
}

export { PostListItem, CommentContext };
