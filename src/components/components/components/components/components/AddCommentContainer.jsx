import UserInitials from "./components/components/UserInitials";
import AddCommentForm from "./components/AddCommentForm";

export default function AddCommentContainer({post, setReloadPostList, reloadPostList}) {
  return (
    <>
      <section>
        <UserInitials post={post} />
        <AddCommentForm
          setReloadPostList={setReloadPostList}
          reloadPostList={reloadPostList}
          post={post}
        />
      </section>
    </>
  );
}
