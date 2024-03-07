import { useEffect, useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import CommentElement from "./CommentElement";
import GetAContactByID from "./GetAContactByID";
import GetInitalsFromNames from "./GetInitialsFromNames";

function PostElement(props) {
  //props data on the current post
  const { postData } = props;
  // list of comments on the current post
  const [commentsList, setCommentsList] = useState([]);
  //states to handle what stage of loading the comments we are in
  const [loadingComments, setLoadingComments] = useState(true);
  const [commentsError, setCommentsError] = useState(null);
  // state to store the data for the comment being written
  const [newCommentData, setNewCommentData] = useState("");
  // data on the person that posted the current comment.
  const [posterInformation, setPosterInformation] = useState({});

  useEffect(() => {
    //setPosterInformation(GetAContactByID(postData.contactId));
    fetch(
      `https://boolean-api-server.fly.dev/MackanPalm/contact/${postData.contactId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log("Contact", data);
        setPosterInformation(data);
      })
      .catch((error) => {
        console.error("Error fetching contact data: ", error);
      });

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
  }, [postData.id, setCommentsList, postData.contactId]);

  if (loadingComments) return "Loading Comments...";
  if (commentsError) return "Error while loading comments...";

  const handleInputPostData = (event) => {
    const postCommentValue = event.target.value;

    setNewCommentData(postCommentValue);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    const postRequestData = createCommentPostRequestBody(newCommentData);

    MakeAPICommentPostRequest(postRequestData);
  };

  const createCommentPostRequestBody = (newCommentData) => {
    const postRequestBody = {
      postId: postData.id,
      content: newCommentData,
      contactId: postData.contactId,
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
    fetch(
      `https://boolean-api-server.fly.dev/MackanPalm/post/${postData.id}/comment`,
      postRequestOption
    )
      .then((responce) => {
        if (responce.ok) {
          return responce.json();
        }
        throw responce;
      })
      .then((data) => {
        setCommentsList([...commentsList, data]);
      })
      .catch((err) => {
        console.log(err);
        //add something for the user to see
      });

    console.log(postRequestOption);
  };

  return (
    <div className="post-box main-post">
      <div className="post-box-head">
        <div className="post-head-circle">
          <p className="text">
            {GetInitalsFromNames(
              posterInformation.firstName,
              posterInformation.lastName
            )}
          </p>
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
            type="text"
            name="postText"
            onChange={handleInputPostData}
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
