import CommentContent from "./CommentContent";
import PulseLoader from "../../../../../../../../Loader/PulseLoader";
import UserName from "../../../../../../../../UserName";

import {
  commentProps,
  contactProps,
} from "../../../../../../../../../utilities/propTypeDefs";

export default function CommentBody({ contact, comment }) {
  if (!contact) {
    return <PulseLoader />;
  }

  const { content } = comment;

  return (
    <div className="post-comment-body rounded-lg bg-cohort-shade p-3">
      <UserName contact={contact} />
      <CommentContent content={content} />
    </div>
  );
}

CommentBody.propTypes = {
  contact: contactProps,
  comment: commentProps,
};
