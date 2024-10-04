import { useState, useEffect } from "react";
import UserIcon from "./UserIcon";
import { useContext } from "react";
import { appContext } from "../App";


export default function CommentItem({ comment }) {
  const [commentInfo, setCommentInfo] = useState(null);
  const { allPosts, setAllPosts, loggedInUser, users } = useContext(appContext);
  

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/Muzea001/contact/${comment.contactId}`
    )
      .then((res) => res.json())
      .then((data) => setCommentInfo(data));
  }, [comment.contactId]);

  console.log("comment info", commentInfo);

  return (
    <>
      {commentInfo && (
        <li className="comment-item">
          <div className="comment-img">
            <UserIcon userInfo={commentInfo}/>
          </div>
          <div className="comment-content">
            <h4>{`${commentInfo.firstName} ${commentInfo.lastName}`}</h4>
            <p>{`${comment.content}`}</p>
          </div>
        </li>
      )}
    </>
  );
}