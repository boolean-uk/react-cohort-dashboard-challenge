import "./comments.css";
import { useEffect, useState } from "react";
const Comments = ({
  commentsInfo,
  comments,
  getComments,
  post,
  loggedInUser,
}) => {
  return (
    <div>
      {comments.map((comment) => {
        // console.log(commentsInfo);

        const commentInfo = commentsInfo.find(
          (commentInfo) => commentInfo.id === comment.contactId
        );
        console.log(comment.contactId);
        return (
          <div key={comment.id} className='comments'>
            <div
              className={`commentInitials ${
                comments.contactId === 1 ? "myComment" : "otherComment"
              }`}>
              {commentInfo && (
                <p>
                  {commentInfo.firstName[0]}
                  {commentInfo.lastName[0]}
                </p>
              )}
            </div>
            <div className='commentBox'>
              {commentInfo && (
                <p className='commentName'>{`
                ${commentInfo.firstName} ${commentInfo.lastName}
                `}</p>
              )}
              <p className='commentContent'>{comment.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Comments;
