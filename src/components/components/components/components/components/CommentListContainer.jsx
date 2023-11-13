import CommentContainer from "./components/CommentContainer";
import { useState, useEffect } from "react";

export default function CommentListContainer({postId, reloadComments, setReloadComments}) {
  const [displayAllComments, setDisplayAllComments] = useState(false)
  const [commentList, setCommentList] = useState(null);
  
  const getCommentList = () => {
    fetch(
      `https://boolean-api-server.fly.dev/Chloe070196/post/${postId}/comment`
    )
      .then((r) => r.json())
      .then((data) =>
        setCommentList(data))
      .then(setReloadComments(false));
  };

  const handleClick = () => {
    setDisplayAllComments(!displayAllComments)
  }

  

  useEffect(getCommentList, [reloadComments])
  return (
    <>
      <section className="left-margin">
        <p onClick={handleClick} className="display-comments">See previous comments</p>
        <ul>
          {displayAllComments && commentList || commentList && !commentList[3] ? commentList.map((comment, index) => (
            <CommentContainer key={index} comment={comment} />
          )): commentList && (<>
                <CommentContainer key={2} comment={commentList.toReversed()[2]} /> 
                <CommentContainer key={1} comment={commentList.toReversed()[1]} /> 
                <CommentContainer key={0} comment={commentList.toReversed()[0]} />
              </>)}
        </ul>
      </section>
    </>
  );
}
