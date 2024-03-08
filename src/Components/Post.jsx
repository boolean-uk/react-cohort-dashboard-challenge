import { useState, useEffect, createContext, useContext } from "react";
import { getInitials } from "../Utils/helpers";
import { AppContext } from "../App";
import Comments from "./Comments";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
export const PostContext = createContext();
import { useNavigate } from "react-router-dom";
function Post({ post, fetchUser, key, postId, setPosts }) {
  const { loggedInUser, deletePost, newPost, posts, navigateSingle } =
    useContext(AppContext);
  const [postComments, setPostComments] = useState([]);
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const navigate = useNavigate()
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}/comment`
    )
      .then((response) => response.json())
      .then((data) => {
        setPostComments(data);
      });
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      const getuser = await fetchUser(post.contactId);
      setUser(getuser);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  const goToSingle = () => {
    navigateSingle(postId);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedPost(post);
  };

  const handleSaveEdit = async () => {
    // Make fetch request to update the post
    const response = await fetch(`https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedPost)
    });
  
    if (response.ok) {
      setPosts(prevPosts => prevPosts.map(prevPost => {
        if (prevPost.id === postId) {
          return { ...prevPost, title: editedPost.title, content: editedPost.content };
        } else {
          return prevPost;
        }
      }));
      setIsEditing(false);
    } else {
      console.error('Failed to update post');
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPost(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="post">
      <li>
        <div style={{ display: "flex" }}>
          {user && (
            <div
              className="profile-picture"
              style={{
                backgroundColor: user.favouriteColour,
                marginTop: "auto",
                marginBottom: "auto",
              }}
              onClick={() => {
                navigate(`/profile/${user.id}`);
              }}
            >
              <p>{getInitials(user.name)}</p>
            </div>
          )}

          <div>
            {isEditing ? (
              <>
                <input type="text" name="title" value={editedPost.title} onChange={handleChange} />
                <textarea name="content" value={editedPost.content} onChange={handleChange} />
              </>
            ) : (
              <>
                <h3>{user && user.name}</h3>
                <h4 onClick={goToSingle}>{post.title}</h4>
              </>
            )}
          </div>

          {loggedInUser && user
            ? loggedInUser.id === user.id && (
                <>
                  {isEditing ? (
                    <>
                      <button onClick={handleSaveEdit}>
                        Save
                      </button>
                      <button onClick={handleCancelEdit}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button style={{ marginLeft: "auto" }} onClick={handleDelete}>
                        <img style={{ width: "20px" }} src={DeleteIcon} alt="" />
                      </button>
                      <button onClick={handleEdit}>
                        <img style={{ width: "20px" }} src={EditIcon} alt="" />
                      </button>
                    </>
                  )}
                </>
              )
            : null}
        </div>

        <p>{post.content}</p>
        <hr />

        <PostContext.Provider
          value={{
            postComments: postComments,
            setPostComments: setPostComments,
          }}
        >
          <Comments fetchUser={fetchUser} postId={post.id} />
        </PostContext.Provider>
      </li>
    </div>
  );
}

export default Post;
