import { useContext, useEffect, useState } from "react";
import { CommentsContext, UsersContext } from "../../../App";

export default function Comment({ post }) {
  const { users } = useContext(UsersContext);
  const { comments, setComments } = useContext(CommentsContext);

  useEffect(() => {
    fetch(
      `https://boolean-uk-api-server.fly.dev/tzoltie/post/${post.id}/comment`
    )
      .then((response) => response.json())
      .then((json) => setComments(json));
  }, [setComments]);

  console.log('comments', comments)
  console.log('postID', post.id)

  const getComment = comments.find((commentor) => commentor.contactId);

  const commentor = users.find((commentor) => {
    if (commentor.id === comments.contactId) return commentor;
  });

    const getCommentForPost = comments.map((comment) => comment.id === post.id)
    console.log(getCommentForPost)

  return (
    <>
      {comments && (
        <>
          {comments.map((comment) => (
            <section className="comment" key={comment.id}>
              <div className="profile-initials">
                {commentor && (
                  <p className="initials">
                    {commentor.firstName[0]}
                    {commentor.lastName[0]}
                  </p>
                )}
              </div>
              <div className="comment-box">
                {commentor && (
                  <p id="commentor-name">
                    {commentor.firstName} {commentor.lastName}
                  </p>
                )}
                <p>{comment.content}</p>
              </div>
            </section>
          ))}
        </>
      )}
    </>
  );
}
