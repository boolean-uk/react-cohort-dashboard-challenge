import { useContext, useState } from "react";
import "./OriginalPost.css";
import { PostContext } from "../PostItem";
import ProfileCircle from "../../ProfileCircle/ProfileCircle";
import { Link } from "react-router-dom";
import * as API from "../../../API/API";
import { FeedContext } from "../../PostFeed/PostFeed";
import { UserContext } from "../../../App";
import TextEditor from "./TextEditor/TextEditor";

function OriginalPost() {
  const { updatePosts } = useContext(FeedContext);
  const {
    post,
    originalPostUser,
    updatePost: updatePostContent,
  } = useContext(PostContext);
  const [edit, setEdit] = useState(false);

  const updatePost = (newContent) => {
    API.UpdatePost(post.id, post, newContent)
      .then((res) => res.json)
      .then((data) => updatePostContent());
  };

  const deletePost = () => {
    API.DeletePostById(post.id)
      .then((res) => res.json())
      .then((data) => updatePosts());
  };
  const toggleEdit = () => setEdit(!edit);

  return (
    <div className="post-container">
      <div className="d-flex py-3 align-items-between justify-content-between">
        <div id="left-side" className="d-flex">
          <ProfileCircle user={originalPostUser}></ProfileCircle>
          <div className="info">
            <h5>
              <b>
                {originalPostUser.firstName} {originalPostUser.lastName}{" "}
                {post.id}
              </b>
            </h5>
            <Link to={`/posts/${post.id}`}>
              {" "}
              <small>{post.title}</small>
            </Link>
          </div>
        </div>
        <div id="right-side" className="d-flex flex-row ">
          <button onClick={toggleEdit} className="btn btn-primary">
            Edit Post
          </button>
          <button onClick={() => deletePost()} className="m-2 btn btn-danger">
            Delete post
          </button>
        </div>
      </div>
      {!edit && <p className="post-content">{post.content}</p>}
      {edit && (
        <TextEditor
          originalText={post.content}
          UpdateApiCall={updatePost}
          cancel={toggleEdit}
        />
      )}
    </div>
  );
}

export default OriginalPost;
