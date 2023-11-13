import CommentContainer from "./components/CommentContainer";
import { useState, useEffect } from "react";

export default function CommentListContainer({postId, reloadComments, setReloadComments, reloadContacts}) {
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
      {commentList && 
      <section className="left-margin">
        {commentList && commentList[3] && <button onClick={handleClick} className="display-comments">See previous comments</button>}
        <ul>
          {displayAllComments && commentList || commentList && !commentList[3] ? commentList.map((comment, index) => (
            <CommentContainer key={index} comment={comment} reloadContacts={reloadContacts}/>
          )): commentList && (<>
                <CommentContainer key={2} comment={commentList.toReversed()[2]} reloadContacts={reloadContacts}/> 
                <CommentContainer key={1} comment={commentList.toReversed()[1]} reloadContacts={reloadContacts}/> 
                <CommentContainer key={0} comment={commentList.toReversed()[0]} reloadContacts={reloadContacts}/>
              </>)}
        </ul>
      </section>
  }
    </>
  );
}
