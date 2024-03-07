import { useContext, useState } from "react";
import "./OriginalPost.css";
import { PostContext } from "../PostItem";
import ProfileCircle from "../../ProfileCircle/ProfileCircle";
import { Link } from "react-router-dom";
import * as API from "../../../API/API";

import TextEditor from "./TextEditor/TextEditor";
import { FeedContext } from "../../PostFeed/PostFeed";

function OriginalPost() {
  const { deletePostAction } = useContext(FeedContext);
  const {
    post,
    originalPostUser,
    updatePost: updatePostContent,
  } = useContext(PostContext);
  const [edit, setEdit] = useState(false);

  // Update post with new content
  const updatePost = (newContent) => {
    API.UpdatePost(post.id, post, newContent)
      .then((res) => res.json)
      .then(() => updatePostContent());
  };

  //Delete post from api
  const deletePost = () => {
    API.DeletePostById(post.id)
      .then((res) => res.json())
      .then(() => deletePostAction());
  };
  //Show hide editor of text
  const toggleEdit = () => setEdit(!edit);

  return (
    <div className="post-container">
      <div className="d-flex py-3 align-items-between justify-content-between">
        <div id="left-side" className="d-flex">
          <ProfileCircle user={originalPostUser}></ProfileCircle>
          <div className="info">
            <h5>
              <b>
                {originalPostUser.firstName} {originalPostUser.lastName}
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
