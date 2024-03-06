  import PropTypes from "prop-types"
import { useState } from "react";

function PostListItem({ post }) {
    const [comments, setComments] = useState([])
    
    return (
      <li className="post-li">
        <div className="post-header">
          {/* TODO user info */}
          <h3>{post.title}</h3>
        </div>
        <p>{post.content}</p>

        <div className="comments">
          <div className="posted-comments">
            <ul className="comments-ul">
              {}
            </ul>
          </div>

          <form className="comment-form" onSubmit={() => {}}>
            {/* TODO user info */}
            <div className="embed-submit-field">
              <input name="comment-input" placeholder="Add a comment..." />
              <button type="submit">Comment</button>
            </div>
          </form>
        </div>
      </li>
    );
}

PostListItem.propTypes = {
    post: PropTypes.object
}

export default PostListItem