import { numberProp, stringProp } from "@utilities/propTypeDefs";
import { Link } from "react-router-dom";

export default function PostTitle({ postId, title }) {
  return (
    <h3 className="post-title text-sm font-bold text-cohort-title">
      <Link to={`/post/${postId}`}>{title}</Link>
    </h3>
  );
}

PostTitle.propTypes = {
  postId: numberProp,
  title: stringProp,
};
