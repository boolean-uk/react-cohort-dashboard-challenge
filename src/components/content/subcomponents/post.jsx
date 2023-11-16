import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import Pfp from "../../shared-components/Pfp/profilePicture";
import CreateComment from "./createComment";

export default function Post({ post, userInfo }) {


    return (
    <>
      <div className="post">
        <div className="user">
          <Pfp />
          <div className="user-info">
            <h3>{`${userInfo.firstName} ${userInfo.lastName}`}</h3>
            <Link to={`/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </div>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
        <CreateComment />
      </div>
    </>
  );
}
