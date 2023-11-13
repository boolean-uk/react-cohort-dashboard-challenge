import UserInitials from "./components/components/UserInitials";
import AddCommentForm from "./components/AddCommentForm";

export default function AddCommentContainer({post, setReloadPostList, reloadPostList, mockLoggedInUserId, reloadComments, setReloadComments, reloadContacts}) {
  return (
    <>
      <section className="form-container left-margin">
        <UserInitials 
            reloadContacts={reloadContacts}
            post={post}
            contactId={mockLoggedInUserId} />
        <AddCommentForm
          post={post}
          setReloadComments={setReloadComments}
          reloadComments={reloadComments}
        />
      </section>
    </>
  );
}