
import { useContext, useEffect, useState, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserContext, PostContext } from '../App';
import Comment from './Comment.jsx';
import PostListItemForm from './PostListItemForm.jsx';

const CommentContext = createContext();

function PostListItem({ post, single }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const { activeUser, users } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostContext);
  const [actualPost, setActualPost] = useState(post);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    if (!post.id) {
      setIsLoading(false);
      return;
    }
    fetch(`https://boolean-api-server.fly.dev/SanderSaether/post/${post.id}/comment`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      });
  }, [post.id]);

  const author = users.find((user) => user.id === post.contactId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const updatePost = (e) => {
    e.preventDefault();
    fetch(`https://boolean-api-server.fly.dev/SanderSaether/post/${actualPost.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(actualPost),
    }).then(() => {
      setEdit(false);
    });
  };

  const deletePost = () => {
    fetch(`https://boolean-api-server.fly.dev/SanderSaether/post/${post.id}`, {
      method: 'DELETE',
    }).then(() => {
      setPosts(posts.filter((p) => p.id !== post.id));
      if (single) navigate(`/`);
    });
  };


  return (
    <div
      style={single ? { marginTop: "90px" } : { marginTop: "0px" }}
      className="post-list-item">
      
      {/* Post editing form */}
      <form onSubmit={updatePost}>
        {/* Post header with author's initials and name */}
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
          {activeUser.id === post.contactId && !edit && (
            <div className="post-edit-delete-buttons">
              <button className="post-edit-delete" onClick={deletePost}>
                {"X"}
              </button>
              <button className="post-edit-delete" onClick={() => setEdit(true)}>
                {"edit"}
              </button>
            </div>
          )}
          {edit && <button hidden={true} type="submit"></button>}
        </div>

        {/* Post content */}
        <div className="post-list-item-content">
          {edit ? (
            <textarea
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

      {/* Comments section */}
      <CommentContext.Provider
        value={{
          comments: comments,
          setComments: setComments,
          post: post,
        }}>
        {comments.length > 0 && (
          <div className="post-list-item-comments">
            <hr />
            {comments.length > 3 && !showMore && (
              <button
                className="post-list-show-more"
                onClick={() => setShowMore(true)}>
                See previous comments
              </button>
            )}
            <ul>
              {(showMore ? comments : comments.slice(comments.length - 3)).map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </ul>
          </div>
        )}
        <PostListItemForm />
      </CommentContext.Provider>
    </div>
  );
}


 


PostListItem.propTypes = {
  post: PropTypes.object.isRequired,
  single: PropTypes.bool,
};

export { PostListItem, CommentContext };

