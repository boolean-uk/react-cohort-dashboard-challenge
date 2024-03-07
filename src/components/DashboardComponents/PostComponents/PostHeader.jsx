import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function PostHeader({ post }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;


  return (
    <>
      {post.user && (
        <div className="post">
          <div
            className="circle header-top post-circle"
            style={{ background: post.user.favouriteColour }}
          >
            {post.user.firstName[0] + post.user.lastName[0]}
          </div>
          <div
            className="post-title-and-user"
          >
            <p className="header-name header-top post-user">
              {post.user.firstName + " " + post.user.lastName}
            </p>
            <Link className="post-title" to={"/view/" + post.id}>
              {post.title}
            </Link>
          </div>
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
