import { useCallback, useEffect, useState } from "react";
import { getRequest } from "../../utilites/apiRequests";
import { CreateComment } from "./CreateComment";
import PropTypes from "prop-types";
import { Comment } from "./Comment";

export const CommentsList = ({ postId }) => {
  const PREVIEW_COMMENTS_AMOUNT = 3;
  const [comments, setComments] = useState(null);
  const [previewView, setPreviewView] = useState(true);

  const getComments = useCallback(() => {
    getRequest(`/post/${postId}/comment`)
      .then((responseComments) => {
        if (responseComments.length < PREVIEW_COMMENTS_AMOUNT)
          setPreviewView(false);

        const filteredComments = previewView
          ? responseComments.slice(-PREVIEW_COMMENTS_AMOUNT)
          : responseComments;

        setComments([...filteredComments]);
      })
      .catch((error) => console.error("Failed to get post comments", error));
  }, [postId, previewView]);

  const handleDeleteComment = () => {
    getComments();
  };

  const stopPreviewView = () => {
    setPreviewView(false);
  };

  useEffect(() => {
    getComments();
  }, [getComments]);

  return (
    <div>
      {!comments ? (
        <p>Loading comments</p>
      ) : (
        <>
          {previewView ? (
            <button onClick={stopPreviewView} className="see-previous-comments">
              See previous comments
            </button>
          ) : null}
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              handleDeleteComment={handleDeleteComment}
            />
          ))}
        </>
      )}
      <CreateComment postId={postId} getComments={getComments} />
    </div>
  );
};

CommentsList.propTypes = {
  postId: PropTypes.number,
};
