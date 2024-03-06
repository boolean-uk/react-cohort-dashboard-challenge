import { useContext, useState } from "react";
// import * as API from "../../../API/API";

import "./PostCommentList.css";
import { PostContext } from "../PostItem";
import PostComment from "./PostComment/PostComment";

const DEFAULT_AMOUNT_COMMENTS = 3;
function PostCommentList() {
  // eslint-disable-next-line no-unused-vars
  const [isLimitedView, setIsLimitedView] = useState(true);
  const { comments } = useContext(PostContext);

  const hasExcessComments = comments.length > DEFAULT_AMOUNT_COMMENTS;
  const hiddenCommentCount = comments.length - DEFAULT_AMOUNT_COMMENTS;

  const toggleFilterComments = () => setIsLimitedView(!isLimitedView);

  let visibleComments = comments;
  if (isLimitedView) {
    visibleComments = visibleComments.slice(-DEFAULT_AMOUNT_COMMENTS);
  }

  return (
    <>
      <div>
        <div className="mx-4"> </div>
        {hasExcessComments && (
          <button
            className="px-3 mt-3 btn-show-more"
            onClick={toggleFilterComments}
          >
            <div className="">
              <small>
                {isLimitedView
                  ? "Show " + hiddenCommentCount + " more"
                  : "Show less"}
              </small>
            </div>
          </button>
        )}
        {visibleComments.map((comment, indx) => (
          <PostComment key={indx} comment={comment} />
        ))}
      </div>
    </>
  );
}

export default PostCommentList;
