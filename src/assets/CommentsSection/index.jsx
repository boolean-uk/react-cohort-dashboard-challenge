import { useEffect, useState } from "react";
import CommentItem from "./commentItem";
import AddComment from "../PostContainer/AddComment";

export default function CommentSection({ post }) {
  const [comments, setComments] = useState([]);

  const fetchAllComments = async ()  => {
    const response = await fetch(`https://boolean-uk-api-server.fly.dev/LudwigJL/post/${post.id}/comment`);
    const data = await response.json();
    setComments(data);
  }

  useEffect(() => {
    fetchAllComments();
  }, []);
  
  return (
    <>
    {comments.map((comment, index) => (
      <li key={index}>
        <CommentItem comment={comment}/>
      </li>

    ))}
     <AddComment post={post} comments={comments} setComments={setComments}/>
    </>
  );
}
