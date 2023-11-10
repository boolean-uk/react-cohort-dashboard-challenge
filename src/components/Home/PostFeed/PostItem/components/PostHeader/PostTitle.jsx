import { stringProp } from "@utilities/propTypeDefs";

export default function PostTitle({ title }) {
  return (
    <h3 className="post-title text-sm font-bold text-cohort-title">{title}</h3>
  );
}

PostTitle.propTypes = { title: stringProp };
