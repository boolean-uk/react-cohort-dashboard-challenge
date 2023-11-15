import CommentContainer from "./CommentContainer";
import { useState, useEffect } from "react";
import getData from "../../js_functions/get";

export default function CommentListContainer({
  postId,
  reloadComments,
  setReloadComments,
  reloadContacts,
}) {
  const [displayAllComments, setDisplayAllComments] = useState(false);
  const [commentList, setCommentList] = useState(null);

  const handleClick = () => {
    setDisplayAllComments(!displayAllComments);
  };

  useEffect(() => {
    getData(`post/${postId}/comment`, setCommentList)
    setReloadComments(false);
  }, [reloadComments, postId]);
  return (
    <>
      {commentList && (
        <section className="left-margin">
          {commentList && commentList[3] && (
            <button onClick={handleClick} className="display-comments">
              See previous comments
            </button>
          )}
          <ul>
            {(displayAllComments && commentList) ||
            (commentList && !commentList[3])
              ? commentList.map((comment) => (
                  <CommentContainer
                    key={comment.id}
                    postId={postId}
                    comment={comment}
                    reloadContacts={reloadContacts}
                    setReloadComments={setReloadComments}
                    reloadComments={reloadComments}
                  />
                ))
              : commentList && (
                  <>
                    <CommentContainer
                      key={commentList.toReversed()[2].id}
                      comment={commentList.toReversed()[2]}
                      setReloadComments={setReloadComments}
                      reloadComments={reloadComments}
                      reloadContacts={reloadContacts}
                      postId={postId}
                    />
                    <CommentContainer
                      key={commentList.toReversed()[1].id}
                      comment={commentList.toReversed()[1]}
                      setReloadComments={setReloadComments}
                      reloadComments={reloadComments}
                      reloadContacts={reloadContacts}
                      postId={postId}
                    />
                    <CommentContainer
                      key={commentList.toReversed()[0].id}
                      comment={commentList.toReversed()[0]}
                      setReloadComments={setReloadComments}
                      reloadComments={reloadComments}
                      reloadContacts={reloadContacts}
                      postId={postId}
                    />
                  </>
                )}
          </ul>
        </section>
      )}
    </>
  );
}
