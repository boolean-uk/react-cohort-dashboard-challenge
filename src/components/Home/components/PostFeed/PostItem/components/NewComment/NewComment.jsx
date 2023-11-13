import UserIcon from "@components/UserIcon";
import NewCommentForm from "./components/NewCommentForm";

import { contactProps, funcProp, numberProp } from "@utilities/propTypeDefs";

export default function NewComment({ postId, setLoadComments, user }) {
  return (
    <div className="new-comment-container flex items-center gap-4">
      <UserIcon contact={user} />
      <NewCommentForm
        postId={postId}
        user={user}
        setLoadComments={setLoadComments}
      />
    </div>
  );
}

NewComment.propTypes = {
  postId: numberProp,
  setLoadComments: funcProp,
  user: contactProps,
};
