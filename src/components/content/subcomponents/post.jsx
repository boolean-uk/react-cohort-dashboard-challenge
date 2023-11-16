import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateComment from "./createComment";
import CommentContainer from "./commentContainer";
import Pfp from "../../shared-components/Pfp/profilePicture";

import { get } from "../../controller";
const postApi = "https://boolean-api-server.fly.dev/Radio58/post";


export default function Post({ postInfo, userInfo, contacts}) {
    const [comments, setComments] = useState(null)

    let hasComments = false

    useEffect(() => {
      get(`${postApi}/${postInfo.id}/comment`).then((data) => {
        if(!data.length) {
          console.log('false')
          return <p>false</p>
        }
        setComments(data)
      })}, [postInfo.id]);
  
    // const renderComment = (comment) => {
    //   const userInfo = contacts.find(cont => cont.id === comment.contactId)

    //   return <Comment userInfo={userInfo} commentInfo={commentInfo} />
    // }

    console.log(postInfo.id, comments)
    
    return (
    <>
      <div className="post">
        <div className="user">
          <Pfp />
          <div className="user-info">
            <h3>{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
            <Link to={`/post/${postInfo.id}`}>
              <p>{postInfo.title}</p>
            </Link>
          </div>
        </div>
        <div className="post-content">
          <p>{postInfo.content}</p>
        </div>
        <div className="comment-container">
          
        </div>
        <CreateComment/>
      </div>
    </>
  );
}
