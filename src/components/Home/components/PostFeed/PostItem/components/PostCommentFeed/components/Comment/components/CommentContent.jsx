import { stringProp } from "@utilities/propTypeDefs";

export default function CommentContent({ content }) {
  return <div className="post-comment-content">{content}</div>;
}

CommentContent.propTypes = { content: stringProp };
