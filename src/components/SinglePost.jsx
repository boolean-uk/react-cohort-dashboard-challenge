import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

export default function SinglePost({ setDataFetched, posts, setPosts }) {
  const { postId } = useParams();
  const [thePost, setThePost] = useState(null);

  console.log("this is postid", postId);
  console.log("this is all posts", posts);

  useEffect(() => {
    const post = posts.find((post) => Number(post.id) === Number(postId)) ?? {};
    console.log(post);
    setThePost(post);
  }, [postId, posts]);

  const post = posts.find((post) => Number(post.id) === Number(postId)) ?? {};

  console.log(post, ": post");
  console.log(thePost, ": thePost");

  const circleStyle = {
    backgroundColor: "gray",
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
      {post.firstName}
      {/* <div className="name">
        <div className="circle" style={circleStyle}>
          {`${post.firstName[0]}${post.lastName[0]}`.toUpperCase()}
        </div>
        <strong>
          {post.firstName} {post.lastName}
        </strong>
      </div>
      <div>
        <Link to={`/view/post/${post.id}`}>
          <h2 className="title">{post.title}</h2>
        </Link>
        <p className="content">{post.content}</p>
      </div>
      <div className="grey-line"></div>
      <CommentList post={post} circleStyle={circleStyle} />
      <CreateComment
        post={post}
        setDataFetched={setDataFetched}
        posts={posts}
        setPosts={setPosts}
      />  */}
    </div>
  );
}
