import { stringProp } from "../../../../../utilities/propTypeDefs";

export default function PostBody({ content }) {
  return <div className="post-body">{content}</div>;
}

PostBody.propTypes = { content: stringProp };
