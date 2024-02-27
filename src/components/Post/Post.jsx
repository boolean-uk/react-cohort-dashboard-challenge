import "@styles/Post.css";
import CommentField from "../CommentField";
import PostComment from "./PostComment";
import ProfileCircle from "../ProfileCircle";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAllComments } from "@services/PostService";

export default function Post({ children, title, id }) {
  const { isLoading, error, data } = useQuery(["comments", id], () =>
    getAllComments(id)
  );
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
      {isLoading && <p>Loading comments...</p>}
      {error && <p>{error.message}</p>}
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
