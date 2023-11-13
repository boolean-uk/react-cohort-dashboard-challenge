import { numberProp, stringProp } from "@utilities/propTypeDefs";
import { Link } from "react-router-dom";

export default function PostTitle({ postId, title }) {
  return (
    <Link to={`/post/${postId}`}>
      <h3 className="post-title text-sm font-bold text-cohort-title">
        {title}
      </h3>
    </Link>
  );
}

PostTitle.propTypes = {
  postId: numberProp,
  title: stringProp,
};
