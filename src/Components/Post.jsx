import { useState, useEffect, createContext, useContext } from "react";
import { getInitials } from "../Utils/helpers";
import { AppContext } from "../App";
import Comments from "./Comments";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";
export const PostContext = createContext();

function Post({ post, fetchUser, key, postId }) {
  const { loggedInUser, deletePost, newPost, posts, navigateSingle } = useContext(AppContext);
  const [postComments, setPostComments] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/Eliassoprani/post/${postId}/comment`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data set", postId);
        console.log("POST ID", postId);
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
    console.log("blahblha");
    navigateSingle(postId)
  }

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
              }}>
              <p>{getInitials(user.name)}</p>
            </div>
          )}

          <div>
            <h3>{user && user.name}</h3>
            <h4 onClick={goToSingle}>{post.title}</h4>
          </div>
          {loggedInUser && user
            ? loggedInUser.id === user.id && (
                <button style={{ marginLeft: "auto" }} onClick={handleDelete}>
                  <img style={{ width: "20px" }} src={DeleteIcon} alt="" />
                </button>
              )
            : null}
          {loggedInUser && user
            ? loggedInUser.id === user.id && (
                <button>
                  <img style={{ width: "20px" }} src={EditIcon} alt="" />
                </button>
              )
            : null}
        </div>

        <p>{post.content}</p>
        <hr />

        <PostContext.Provider
          value={{
            postComments: postComments,
            setPostComments: setPostComments,
          }}>
          <Comments fetchUser={fetchUser} postId={post.id} />
        </PostContext.Provider>
      </li>
    </div>
  );
}

export default Post;
