import CommentContainer from "./components/CommentContainer";
import { useState, useEffect } from "react";

export default function CommentListContainer({postId}) {
  const [commentList, setCommentList] = useState(null);
  
  const getCommentList = () => {
    fetch(
      `https://boolean-api-server.fly.dev/Chloe070196/post/${postId}/comment`
    )
      .then((r) => r.json())
      .then((data) =>
        setCommentList(data)
    );
  };

  useEffect(getCommentList, [])
  return (
    <>
      <section>
        {/* make this functional if doing extensions */}
        <p>See previous commentLists</p>
        <ul>
          {commentList && commentList.map((comment, index) => (
            <CommentContainer key={index} comment={comment} />
          ))}
        </ul>
      </section>
    </>
  );
}
