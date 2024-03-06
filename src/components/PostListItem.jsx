  import PropTypes from "prop-types"
import { useEffect, useState } from "react";

function PostListItem({ post }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
      fetch(
        `https://boolean-api-server.fly.dev/maha897/post/${post.id}/comment`
      )
        .then((response) => response.json())
        .then(setComments)
    })

    return (
      <li className="post-li">
        <div className="post-header">
          {/* TODO user info */}
          <h3>{post.title}</h3>
        </div>
        <p>{post.content}</p>

        <div className="comments">
          <div className="posted-comments">
            <h3>Comments: </h3>
            <ul className="comments-ul">
              {comments.map((comment) => (
                <li key={comment.id}>
                  User #{comment.contactId}: {comment.content}
                  <br /> <br />
                </li> 
              ))}
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