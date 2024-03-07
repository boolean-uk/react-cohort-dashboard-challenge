import CommentForm from "./CommentForm";
import { useEffect, useState } from "react";
import PropTypes from "prop-types"
import CommentsList from "./CommentsList";

function Comments({ post, getUserInfo }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      fetch(
        `https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then(setComments);
    }, [post.id]);

    return (
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
    );
}

Comments.propTypes = {
    post: PropTypes.object,
    getUserInfo: PropTypes.func,
}

export default Comments