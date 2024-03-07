import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";

export default function PostHeader({ post }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;


  return (
    <>
      {post.user && (
        <div className="post">
          <div
            className="circle header-top"
            style={{ background: post.user.favouriteColour }}
          >
            {post.user.firstName[0] + post.user.lastName[0]}
          </div>

          <p className="header-name header-top">
            {post.user.firstName + " " + post.user.lastName}
          </p>
          <p>{post.title}</p>
        </div>
      )}
      {!post.user && (
        <div className="post">
          <p>anonymous</p>
          <p>{post.title}</p>
        </div>
      )}
    </>
  );
}
