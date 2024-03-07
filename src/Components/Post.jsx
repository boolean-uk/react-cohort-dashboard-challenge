import { useState, useEffect, createContext, useContext } from "react";
import { getInitials } from "../Utils/helpers";
import { AppContext } from "../App";
import Comments from "./Comments";
import EditIcon from "../assets/edit.svg";
import DeleteIcon from "../assets/delete.svg";

export const PostContext = createContext();

function Post({ post, fetchUser }) {
  const { loggedInUser, deletePost, newPost, posts } = useContext(AppContext);
  const [postComments, setPostComments] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchComments();
    fetchUsername();
  }, []);

  const updateComment = (obj) => {
    setPostComments([
      ...postComments, obj])
  }

  const fetchUsername = async () => {
    try {
      const getuser = await fetchUser(post.contactId);
      setUser(getuser);
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://boolean-api-server.fly.dev/Eliassoprani/post/${post.id}/comment`
      );
      const data = await response.json();
      setPostComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="post">
      <li>
        <div style={{ display: "flex" }}>

          {user && (
            <div className="profile-picture" style={{ backgroundColor: user.favouriteColour, marginTop: 'auto', marginBottom: 'auto' }}>
              <p>{getInitials(user.name)}</p>
            </div>
          )}

          <div>
            <h3>{user && user.name}</h3>
            <h4>{post.title}</h4>
          </div>
          {(loggedInUser && user) ? (loggedInUser.id === user.id && <button style={{ marginLeft: 'auto' }} onClick={handleDelete}><img style={{ width: "20px" }} src={DeleteIcon} alt="" /></button>) : null}
          {(loggedInUser && user) ? (loggedInUser.id === user.id && <button><img style={{ width: "20px" }} src={EditIcon} alt="" /></button>) : null}

        </div>

        <p>{post.content}</p>
        <hr />

        <PostContext.Provider value={{ postId: post.id, postComments, setPostComments: updateComment }}>
          <Comments fetchUser={fetchUser} />
        </PostContext.Provider>
      </li>
    </div>
  );
}

export default Post;
