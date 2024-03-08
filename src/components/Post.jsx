import React, { useState, useEffect, useContext } from "react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentList";
import { AppContext } from "../App";
import ProfileWithFullText from "./ProfileWithFullText";
import { Link, useParams } from "react-router-dom";

function Post({ post }) {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState({
    firstName: "default",
    lastName: "default",
  });
  const { posts, setPosts } = useContext(AppContext);
  const [currentPost, setCurrentPost] = useState(null);

  const fetchComment = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/post/${post.id}/comment`
    )
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  const fetchPostAuthor = () => {
    fetch(
      `https://boolean-api-server.fly.dev/hannapham1007/contact/${post.contactId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  };

  useEffect(() => {
    fetchComment();
    fetchPostAuthor();
  }, []);

  return (
    <div className="post-item">
      <ProfileWithFullText user={user} />
      <Link to={`/post/${post.id}`}>
        <h3 style={{ color: "var(--post-title-color)" }}>{post.title}</h3>
      </Link>
      <p>{post.content}</p>
      <hr style={{ height: "1px", width: "100%", color: "lightgrey" }}></hr>
      <CommentList comments={comments} />
      <CreateComment
        setComments={setComments}
        comments={comments}
        postId={post.id}
      />
    </div>
  );
}

export default Post;
