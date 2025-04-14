import "./Comments.css";
import { useContext, useEffect, useState } from "react";
import Comment from "./Comment";
import { NewCommentContext } from "./Post";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isNewComment] = useContext(NewCommentContext);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/AtikoSpeed/post/${postId}/comment`
    )
      .then((response) => response.json())
      .then(setComments);
  }, [isNewComment]);

  if (comments.length > 0) {
    return (
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              commentText={comment.content}
              commenterId={comment.contactId}
            />
          );
        })}
      </div>
    );
  }
}
