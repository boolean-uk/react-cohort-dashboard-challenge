import { useEffect, useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import CommentElement from "./CommentElement";

function PostElement(props) {
  const { postData } = props;
  const [commentsList, setCommentsList] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    fetch(
      `https://boolean-api-server.fly.dev/MackanPalm/post/${postData.id}/comment`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("comments", data);
        setCommentsList(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setCommentsError(error);
      })
      .finally(() => {
        setLoadingComments(false);
      });
  }, [postData.id, setCommentsList]);

  if (loadingComments) return "Loading Comments...";
  if (commentsError) return "Error while loading comments...";

  const HandleSubmit = (event) => {
    event.preventDefault();

    //const postRequestData = stringToPostRequestBody(newPostData);

    //MakeAPIPostRequest(postRequestData);
  };

  return (
    <div className="post-box main-post">
      <div className="post-box-head">
        <div className="post-head-circle">
          <p className="text">MP</p>
        </div>
        <h2 className="post-head-user">name of poster</h2>
        <h5 className="post-head-title">{postData.title}</h5>
      </div>
      <div className="post-box-body">
        <p className="post-body-content">{postData.content}</p>
        <hr className="rounded"></hr>
      </div>
      <div className="post-box-comments">
        <p className="post-comments-header">Comments:</p>
        {commentsList.toReversed().map((comment, index) => {
          return <CommentElement key={index} comment={comment} />;
        })}
      </div>
      <div className="post-input-coment-box">
        <form onSubmit={HandleSubmit}>
          <input
            className="comment-text-box"
            placeholder="write your comment here"
          ></input>
          <button className="comment-button">submit button</button>
        </form>
      </div>
    </div>
  );
}
export default PostElement;
PostElement.propTypes = {
  postData: PropTypes.object,
};
