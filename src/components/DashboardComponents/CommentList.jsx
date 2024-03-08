import { DataContext } from "../../App";
import { useContext, createContext, useState } from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList({ post, comments }) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;
  const [viewAll, setViewAll] = useState(false)

  let filteredComments = comments;

  if(!viewAll && comments.length > 3) {
    filteredComments = comments.slice(comments.length-3, comments.length)
  }

  return (
    <>
      {comments.length > 3 && <button onClick={() => setViewAll(!viewAll)}>{viewAll? "Hide previous comments":"See previous comments"}</button>}
      {filteredComments.map((comment, index) => (
        <CommentListItem key={index} comment={comment} />
      ))}
    </>
  );
}
