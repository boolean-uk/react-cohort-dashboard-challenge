export default function DeleteCommentBtn(props) {
  const { postid, commentid, setRefreshComments } = props;

  const deleteComment = () => {
    fetch(
      `https://boolean-api-server.fly.dev/yee0802/post/${postid}/comment/${commentid}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => setRefreshComments(true));
  };

  return (
    <button
      title="DELETE"
      className="delete-btn comment-del"
      onClick={deleteComment}
    >
      X
    </button>
  );
}
