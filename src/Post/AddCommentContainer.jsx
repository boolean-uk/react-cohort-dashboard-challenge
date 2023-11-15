import UserInitials from "../Low-level_components/UserInitials"
import CommentForm from "./CommentForm";

export default function AddCommentContainer({post, setReloadPostList, reloadPostList, mockLoggedInUserId, reloadComments, setReloadComments, reloadContacts}) {
  reloadPostList
  return (
    <>
      <section className="form-container left-margin">
        <UserInitials 
            reloadContacts={reloadContacts}
            post={post}
            contactId={mockLoggedInUserId} />
        <CommentForm
          post={post}
          setReloadComments={setReloadComments}
          reloadComments={reloadComments}
        />
      </section>
    </>
  );
}
