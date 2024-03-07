import { DataContext } from "../../App";
import { useContext, createContext } from "react";
import CommentListItem from "./CommentListItem";

export default function CommentList({ post, comments }) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return (
    <>
      {comments.map((comment, index) => (
        <CommentListItem key={index} comment={comment} />
      ))}
    </>
  );
}
