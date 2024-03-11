import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentItem from "./CommentItem";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

export default function PostListItem({ post, setDataFetched, posts, setPosts }) {
    const { postId } = useParams();
    
    useEffect(() => {
        if (posts && postId) {
            console.log("this is posts:", posts)
            const matchingPost = posts.find((post) => Number(post.id) === Number(postId));
            setPosts(matchingPost);
        }
    }, [posts, postId])

    if (!post) {
        return null; // Return null or a loading indicator if the post is not available
    }
    
  const circleStyle = {
    backgroundColor: post.favouriteColour || "gray",
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
      />
    </div>
  );
}
