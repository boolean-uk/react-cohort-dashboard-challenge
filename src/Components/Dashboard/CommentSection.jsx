import { useEffect, useState } from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";
import PropTypes from "prop-types";

function CommentSection({ post }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/post/${post.id}/comment`)
      .then((response) => response.json())
      .then(setComments);
  }, [post.id]);

  return (
    <div className="comment-section">
      <ul>
        {comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
      </ul>
      <CreateComment
        post={post}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
}

CommentSection.propTypes = {
  post: PropTypes.object,
};

export default CommentSection;
