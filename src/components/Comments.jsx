import CommentForm from "./CommentForm";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CommentsList from "./CommentsList";

const CommentContext = createContext();

function Comments({ post, getUserInfo }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`)
      .then((response) => response.json())
      .then(setComments);
  }, [post.id]);

  return (
    <CommentContext.Provider
      value={{ post, getUserInfo, comments, setComments }}
    >
      <div className="comments">
        {comments.length > 0 && (
          <CommentsList comments={comments} getUserInfo={getUserInfo} />
        )}

        <CommentForm
          post={post}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </CommentContext.Provider>
  );
}

Comments.propTypes = {
  post: PropTypes.object,
  getUserInfo: PropTypes.func,
};

export { Comments, CommentContext };
