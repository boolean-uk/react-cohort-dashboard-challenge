import { DataContext } from "../../../App";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileAvatar from "../../ProfileAvatar";

export default function PostHeader({ post }) {
  const users = useContext(DataContext).users;
  const posts = useContext(DataContext).posts;

  return (
    <>
      {post.user && (
        <div className="post">
          <ProfileAvatar
            user={post.user}
            className="circle header-top post-circle"
          />
          <div className="post-title-and-user">
            <p className="header-name header-top post-user">
              {post.user.firstName + " " + post.user.lastName}
            </p>
            <Link className="post-title" to={"/view/" + post.id}>
              {post.title}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
