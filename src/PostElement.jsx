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

    const postRequestData = stringToPostRequestBody(newPostData);

    MakeAPIPostRequest(postRequestData);
  };

  return (
    <div className="yellow main-post">
      <h2>{postData.title}</h2>
      <p>{postData.content}</p>
      <div className="left">
        comments:
        {commentsList.toReversed().map((comment, index) => {
          return <CommentElement key={index} comment={comment} />;
        })}
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
