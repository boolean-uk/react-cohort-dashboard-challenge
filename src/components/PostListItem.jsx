import React from "react";
import CreateComment from "./CreateComment";

export default function PostListItem({ post }) {
  const circleStyle = {
    backgroundColor: post.favouriteColour,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontWeight: "bold",
  };

  return (
    <div className="post">
        <div className="name">
          <div className="circle" style={circleStyle}>
            {`${post.firstName[0]}${post.lastName[0]}`.toUpperCase()}
          </div>
          <strong>
            {post.firstName} {post.lastName}
          </strong>
        </div>
        <div>
          <h2 className="title">{post.title}</h2>
          <p className="content">{post.content}</p>
        </div>
        <CreateComment/>
    </div>
  );
}
