import { stringProp } from "../../../../../../utilities/propTypeDefs";

export default function PostTitle({ title }) {
  return (
    <h3 className="post-title text-cohort-title text-sm font-bold">{title}</h3>
  );
}

PostTitle.propTypes = {title: stringProp}