import "@styles/Post.css";
import CommentField from "../CommentField";
import PostComment from "./PostComment";
import ProfileCircle from "../ProfileCircle";
import { useGetAllComments } from "@services/PostService";
import { useEffect, useState } from "react";

export default function Post({ children, title, id }) {
  const { data, error, loading } = useGetAllComments(id);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (data) {
      setComments(data.slice(0, 3));
    }
  }, [data]);

  return (
    <div className="card">
      <div className="user-info">
        <ProfileCircle color={"#64dc78"} fullname={"Test User"} />
        <div className="user-info-text">
          <h3 style={{ padding: 0, margin: 0 }}>Test User</h3>
          <p className="title">{title}</p>
        </div>
      </div>
      <p className="card-content">{children}</p>
      {loading && <p>Loading comments...</p>}
      {error && <p>{error}</p>}
      <div className="card-comments">
        {data && data.length > 3 && (
          <a onClick={() => setComments(data)}>See previous comments</a>
        )}
        {data &&
          comments.map((comment) => (
            <PostComment
              username={"Test User"}
              content={comment.content}
              key={comment.id}
            />
          ))}
        <CommentField />
      </div>
    </div>
  );
}
