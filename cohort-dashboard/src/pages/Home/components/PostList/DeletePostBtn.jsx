export default function DeletePostBtn(props) {
  const { setRefresh, id } = props;

  const deletePost = () => {
    fetch(`https://boolean-api-server.fly.dev/yee0802/post/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => setRefresh(true));
  };
  return (
    <button title="DELETE" className="delete-btn" onClick={deletePost}>
      X
    </button>
  );
}
