import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateComment from "./createComment";
import Comment from "./comment";
import Pfp from "../../shared-components/Pfp/profilePicture";

import { get } from "../../controller";
const postApi = "https://boolean-api-server.fly.dev/Radio58/post";


export default function Post({ postInfo, setActivePost, userInfo, contacts }) {
    const [comments, setComments] = useState(null)


    useEffect(() => {
      get(`${postApi}/${postInfo.id}/comment`).then((data) => {
        setComments(data)
      })}, [postInfo.id]);


    //console.log(postInfo.id, comments)
    

    return (
    <>
      <div className="post">
        <div className="user">
          <Pfp
            userInfo={userInfo}
          />
          <div className="user-info">
            <h3>{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
            <hr></hr>
            <Link to={`/post/${postInfo.id}`} onClick={() => {setActivePost(postInfo)}}>
              <p className="post-title">{postInfo.title}</p>
            </Link>
          </div>
        </div>
        <div className="post-content">
          <p>{postInfo.content}</p>
        </div>
        <hr></hr>
        <div className="comment-container">
          {comments ? comments.map((comment) => {        
              const userInfo = contacts.find(cont => cont.id === comment.contactId)
              //console.log(postInfo.id, comment)
              return (
                <Comment
                  userInfo={userInfo}
                  commentInfo={comment}
                  key={comment.id}
                />)
            }) : false}
        </div>
        <CreateComment
          setComments={setComments}
          user={userInfo}
          PID={postInfo.id}
        />
      </div>
    </>
  );
}
