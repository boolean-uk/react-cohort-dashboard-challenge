import { DataContext } from "../../App";
import { useContext } from "react";

export default function CommentListItem({ comment }) {
  const user = useContext(DataContext).user;
  const posts = useContext(DataContext).posts;

  return <p>{comment.content}</p>;
}
