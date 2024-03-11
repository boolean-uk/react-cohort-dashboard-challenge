import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CommentList from "./CommentList";
import CreateComment from "./CreateComment";

export default function SinglePost({ setDataFetched, posts, setPosts }) {
  const { postId } = useParams();
  const [thePost, setThePost] = useState(null);
  const [favouriteColour, setFavouriteColor] = useState("gray");
  const navigate = useNavigate();

  console.log("this is postid", postId);
  console.log("this is all posts", posts);

  useEffect(() => {
    const post = posts.find((post) => Number(post.id) === Number(postId));
    console.log(post, ": post");
    if (post) {
      setThePost(post);
      setFavouriteColor(post.favouriteColour);
    } else {
      setThePost(null);
    }
  }, [postId, posts]);

  console.log(thePost, ": thePost");

  const circleStyle = {
    backgroundColor: favouriteColour || "gray",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10px",
    fontWeight: "bold",
  };

  const returnButtonStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    cursor: "pointer",
  };

  const returnIconStyle = {
    fontSize: "24px",
    marginRight: "10px",
  };

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <div className="post">
      <div style={returnButtonStyle} onClick={handleReturn}>
        <code>Return</code>
      </div>
      {thePost && (
        <>
          <div className="name">
            <div className="circle" style={circleStyle}>
              {`${thePost.firstName[0]}${thePost.lastName[0]}`.toUpperCase()}
            </div>
            <strong>
              {thePost.firstName} {thePost.lastName}
            </strong>
          </div>
          <div>
            <h2 className="title">{thePost.title}</h2>
            <p className="content">{thePost.content}</p>
          </div>
          <div className="grey-line"></div>
          <CommentList post={thePost} circleStyle={circleStyle} />
          <CreateComment
            post={thePost}
            setDataFetched={setDataFetched}
            posts={posts}
            setPosts={setPosts}
          />
        </>
      )}
    </div>
  );
}
