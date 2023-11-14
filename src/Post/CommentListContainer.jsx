import CommentContainer from "./CommentContainer"
import { useState, useEffect } from "react";
import getData from "../../js_functions/get";

export default function CommentListContainer({postId, reloadComments, setReloadComments, reloadContacts}) {
  const [displayAllComments, setDisplayAllComments] = useState(false)
  const [commentList, setCommentList] = useState(null);

  const handleClick = () => {
    setDisplayAllComments(!displayAllComments)
  }

  useEffect(() => {
    getData(`post/${postId}/comment`, setCommentList)
    setReloadComments(false);
  }, [reloadComments])
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
