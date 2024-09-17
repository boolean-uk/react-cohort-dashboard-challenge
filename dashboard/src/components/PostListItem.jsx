import { Link } from "react-router-dom";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";
import UserAvatar from "./UserAvatar";

function PostListItem({ post, fetchPosts }) {
  return (
    <div className="post">
      <div className="userAvatarContainer">
        <UserAvatar
          firstName={`${post.author.firstName}`}
          lastName={`${post.author.lastName}`}
          color={post.author.favouriteColour}
        />
      </div>
      <div className="postContent">
        <div
          style={{
            fontSize: "24px",
            color: "black",
            textAlign: "left",
            marginTop: "20px",
            marginLeft: "10px",
          }}
        >
          <strong>
            {post.author.firstName} {post.author.lastName}
          </strong>{" "}
        </div>
        <Link to={`/posts/${post.id}`}>
          <div
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginTop: "1px",
              marginLeft: "10px",
            }}
          >
            <strong>{post.title}</strong>
          </div>
        </Link>
        <div
          style={{
            textAlign: "left",
            marginTop: "20px",
            marginLeft: "-50px",
          }}
        >
          {post.content}
        </div>
        <CommentList comments={post.comments} />
        <CreateComment post={post} fetchPosts={fetchPosts} />
      </div>
    </div>
  );
}

export default PostListItem;
