import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import CreateComment from "./CommentList/Comment/CreateComment";

function Post(props) {
  const { post, user } = props;
  const [comments, setComments] = useState(null);

  useEffect(() => {
    if (post && post.id) getComments();
  }, [post]);

  async function getComments() {
    const api = await fetch(
      `https://boolean-api-server.fly.dev/espensolhaug1/post/${post.id}/comment`
    );
    const apiJson = await api.json();
    setComments(apiJson);
  }

  return (
    <div className="post">
      <div className="userinfo">
        {user && (
          <div style={{ objectFit: "contain" }}>
            <p
              className="initials"
              style={{
                backgroundColor: user.favouriteColour,
              }}
            >
              {user.firstName[0]}
              {user.lastName[0]}
            </p>
          </div>
        )}
        <div>
          {user && (
            <>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <Link to={`/post/${post.id}`} className="postTitle">
                {post.title}
              </Link>
            </>
          )}
        </div>
      </div>
      <p className="postContent">{post.content}</p>
      <div className="comments">
        {comments && <CommentList comments={comments} />}
      </div>
      <CreateComment
        post={post}
        setComments={setComments}
        comments={comments}
      />
    </div>
  );
}

export default Post;
