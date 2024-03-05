/* eslint-disable react/prop-types */
import AddComment from "./AddComment";
import Comments from "./Comments";
import PostHeader from "./PostHeader";
import "../Body.css";
import { createContext, useState } from "react";

export const CommentContext = createContext();
export default function Post({ post }) {
  const [comments, setComments] = useState([{ title: "", content: "" }]);
  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      <div className="post-box">
        <PostHeader post={post} />
        <div className="post-body">{post.content}</div>
        <Comments post={post} />
        <AddComment />
      </div>
    </CommentContext.Provider>
  );
}
