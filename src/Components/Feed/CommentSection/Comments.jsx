import { useEffect } from "react";
import Comment from "./Comment";

export default function Comments({ post, comment, setComment }) {

  useEffect(() => {
    if (!post) {
      return;
    }
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
    )
      .then((response) => {;
        return response.json();
      })
      .then((json) => setComment(json));
  }, [setComment]);


  return (
    <>
      {comment && (
        <ul>
          {comment.map((comment) => (
            <Comment key={comment.id} comment={comment}/>
          ))}
        </ul>
      )}
    </>
  );
}
