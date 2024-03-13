import { useEffect, useState } from "react";
import "../App.css";
import PropTypes from "prop-types";
import CommentElement from "./Comment";
import {
  getAContactByID,
  getAllComments,
  postNewCommentToAPI,
} from "../Api.js";
import getInitalsFromNames from "../GetInitialsFromNames";
import { Link } from "react-router-dom";

const initialCommentData = "";

function Post(props) {
  //props data on the current post
  const { postData } = props;
  // list of comments on the current post
  const [commentsList, setCommentsList] = useState([]);
  //states to handle what stage of loading the comments we are in
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsError, setCommentsError] = useState(null);
  // state to store the data for the comment being written
  const [newCommentData, setNewCommentData] = useState(initialCommentData);
  // data on the person that posted the current comment.
  const [posterInformation, setPosterInformation] = useState(null);

  useEffect(() => {
    getAContactByID(postData.contactId, setPosterInformation);

    getAllComments(
      postData.id,
      setCommentsList,
      setLoadingComments,
      setCommentsError
    );
  }, [postData.id, setCommentsList, postData.contactId]);

  console.log(loadingComments);
  //something is wrong. the loading comments state does never return to false so i had to disable them. but the data is working.
  //if (loadingComments) return "Loading Comments...";
  if (commentsError) return "Error while loading comments...";

  const handleInputPostData = (event) => {
    const postCommentValue = event.target.value;

    setNewCommentData(postCommentValue);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const postRequestData = createCommentPostRequestBody(newCommentData);

    MakeAPICommentPostRequest(postRequestData);

    setNewCommentData(initialCommentData);
  };

  const createCommentPostRequestBody = (newCommentData) => {
    const postRequestBody = {
      postId: postData.id,
      content: newCommentData,
      contactId: props.simulatedUserID,
    };
    return postRequestBody;
  };

  //function for API Post Request for the Comments
  const MakeAPICommentPostRequest = (postRequestData) => {
    const postRequestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postRequestData),
    };
    //posts comment to comments API
    postNewCommentToAPI(
      postData.id,
      postRequestOption,
      setCommentsList,
      commentsList
    );

    console.log(postRequestOption);
  };

  return (
    <div className="post-box main-post">
      <div className="post-box-head">
        <div className="post-head-circle">
          {posterInformation && (
            <p className="text">
              {getInitalsFromNames(
                posterInformation.firstName,
                posterInformation.lastName
              )}
            </p>
          )}
        </div>
        {posterInformation && (
          <h2 className="post-head-user">
            {posterInformation.firstName + " " + posterInformation.lastName}
          </h2>
        )}

        <Link to={`/posts/${postData.id}`} className="post-head-title">
          {postData.title}
        </Link>
      </div>
      <div className="post-box-body">
        <p className="post-body-content">{postData.content}</p>
        <hr className="rounded"></hr>
      </div>
      <div className="post-box-comments">
        <p className="post-comments-header">Comments:</p>
        {commentsList.map((comment) => {
          return (
            <CommentElement
              key={comment.id}
              comment={comment}
              posterInformation={posterInformation}
            />
          );
        })}
      </div>
      <div className="post-input-coment-box">
        <form onSubmit={HandleSubmit}>
          <input
            className="comment-text-box"
            placeholder="write your comment here"
            type="text"
            name="postText"
            value={newCommentData}
            onChange={handleInputPostData}
          ></input>
          <button className="comment-button">submit button</button>
        </form>
      </div>
    </div>
  );
}
export default Post;
Post.propTypes = {
  postData: PropTypes.object,
  simulatedUserID: PropTypes.number,
};
