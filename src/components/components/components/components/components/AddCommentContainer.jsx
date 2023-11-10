import UserInitials from "./components/components/UserInitials";
import AddCommentForm from "./components/AddCommentForm";

export default function AddCommentContainer({post, setReloadPostList, reloadPostList, mockLoggedInUserId}) {
  return (
    <>
      <section>
        <UserInitials 
            post={post}
            contactId={mockLoggedInUserId} />
        <AddCommentForm
          setReloadPostList={setReloadPostList}
          reloadPostList={reloadPostList}
          post={post}
        />
      </section>
    </>
  );
}
