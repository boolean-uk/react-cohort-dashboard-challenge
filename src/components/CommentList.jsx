import React, { useContext, useState } from "react";
import { AppContext, UserCommentContext } from "../App";
import Comment from "./Comment";
import CommentProfile from "./CommentProfile";

function CommentList({ comments }) {
  const reverseComments = [...comments].reverse();

  
  const [showAllComments, setShowAllComments] = useState(false);
  // displays all comments or the latest three comments based on the showAllComments state
  const showThreeComments = showAllComments
    ? reverseComments
    : reverseComments.slice(0, 3);

  const handleShowAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  return (
    <div>
      <p onClick={handleShowAllComments} style={{ fontWeight: "bold" }}>
        See previous comments
      </p>

      {showThreeComments.map((item, index) => (
        <div  key={index}>
          <Comment comment={item} />
        </div>
      ))}
    </div>
  );
}

export default CommentList;
