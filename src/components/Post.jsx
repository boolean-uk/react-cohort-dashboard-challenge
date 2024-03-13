import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { createContext } from "react";
import PostForm from "./PostForm";
import Icon from "./Icon";

const PostContext = createContext();

function Post({ post }) {
  const context = useContext(AppContext);

  const [user, setUser] = useState("");
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [formData, setFormData] = useState({});
  const [update, setUpdate] = useState(false);

  const toggleComments = () => {
    setShowAllComments(!showAllComments);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name !== undefined) {
      setFormData({ ...formData, [name]: value });
    }
  };

  useState(() => {
    setFormData(post);
  }, []);

  useEffect(() => {
    const thisUser = context.contacts.find(
      (x) => parseInt(x.id) === post.contactId
    );
    setUser(thisUser);

    fetch(`https://boolean-api-server.fly.dev/ssuihko/post/${post.id}/comment`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, [post, context.contacts]);

  // designed to launch whenever a new comment is posted
  // rematching comments with the correct post after publishing new post
  // if postId and id do not match
  useEffect(() => {
    if (comments.length > 0) {
      if (post.id !== comments[0].postId) {
        fetch(
          `https://boolean-api-server.fly.dev/ssuihko/post/${post.id}/comment`
        )
          .then((response) => response.json())
          .then((data) => {
            setComments(data);
          });
      }
    }
  }, [comments, post]);

  // DELETE
  const handleDeletePost = (id) => {
    const DEL_URL = "https://boolean-api-server.fly.dev/ssuihko/post/" + id;

    const deleteOptions = {
      method: "DELETE",
      url: DEL_URL,
    };

    let updatedList = context.posts.filter((item) => {
      if (parseInt(item.id) !== parseInt(id)) return item;
    });

    // https://boolean-api-server.fly.dev/ssuihko/post/{id}/comment does not work so the comments have to be deleted individually in a loop...
    comments.forEach((x) => {
      var DEL_URL_COMMENTS =
        "https://boolean-api-server.fly.dev/ssuihko/post/" +
        id +
        "/comment/" +
        x.id;

      var commentDeleteOptions = {
        method: "DELETE",
        url: DEL_URL_COMMENTS,
      };

      let updatedCommentList = comments.filter((item) => {
        if (parseInt(item.id) !== parseInt(x.id)) return item;
      });

      fetch(DEL_URL_COMMENTS, commentDeleteOptions)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error(`Something went wrong! Status: ${res.status}`);
        })
        .then(() => {
          setComments([...updatedCommentList]);
        })
        .catch((err) => {
          console.log("error occured: ", err);
        });
    });

    fetch(DEL_URL, deleteOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then(() => {
        context.setPosts([...updatedList]);
      })
      .catch((err) => {
        console.log("error occured: ", err);
      });
  };

  // UPDATE
  const handleUpdatePost = (formData) => {
    let updatedList = context.posts.map((item) => {
      if (parseInt(item.id) === parseInt(formData.id)) {
        return { ...item, ...formData };
      }
      return item;
    });

    const PUT_URL =
      "https://boolean-api-server.fly.dev/ssuihko/post/" + formData.id;

    const putOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(PUT_URL, putOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Something went wrong! Status: ${res.status}`);
      })
      .then(() => {
        context.setPosts([...updatedList]);
      })
      .catch((err) => {
        console.log("error occured: ", err);
      });

    setFormData(formData);
    setUpdate(false);
  };

  return (
    <article className="post-content">
      <PostContext.Provider
        value={{
          post: post,
          comments: comments,
          setComments: setComments,
          contacts: context.contacts,
        }}
      >
        {user === undefined || user === "" ? (
          <p>loading...</p>
        ) : (
          <div className="post-content-div">
            <div className="post-buttons-color-div">
              <button
                className="del-button"
                onClick={(e) => {
                  e.preventDefault();
                  handleDeletePost(post.id);
                }}
              >
                Delete
              </button>
              <button
                className="modify-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setFormData(post);
                  setUpdate(!update);
                }}
              >
                Modify
              </button>
              <Icon user={user} />
              <Link to={`/profile/${user.id}`} className="profile-link">
                <h3>{user.firstName + " " + user.lastName} </h3>
              </Link>
              {update ? (
                <PostForm
                  handleUpdatePost={handleUpdatePost}
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              ) : (
                <div className="post-article">
                  <h5
                    onClick={(e) => {
                      e.preventDefault();
                      context.findPost(post.id);
                    }}
                  >
                    <Link to={`/post/${post.id}`} className="post-title">
                      {post.title}
                    </Link>
                  </h5>
                  <p>{post.content}</p>
                </div>
              )}
            </div>
            <button
              className="show-comment-button"
              onClick={() => toggleComments()}
            >
              {showAllComments
                ? "Hide previous comments"
                : "See previous comments"}
            </button>
            <div>
              {showAllComments
                ? comments
                    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
                    .map((comment, index) => (
                      <Comment comment={comment} key={index} />
                    ))
                : comments
                    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
                    .slice(0, 3)
                    .map((comment, index) => (
                      <Comment comment={comment} key={index} />
                    ))}
            </div>
            <CreateComment />
          </div>
        )}
      </PostContext.Provider>
    </article>
  );
}

export { Post as default, PostContext };

Post.propTypes = {
  post: PropTypes.object,
};
