import PostSection from "./postSection/postSection";
import CommentsList from "./commensList/commentsList";
import CommentsInput from "../commentsInput/commentsInput";

const Post = ({
  contactPost,
  contacts,
  comments,
  post,
  commentInputHandler,
  newCommentButton,
  currentUser,
  openPostHandler,
}) => {
  return (
    <li>
      <PostSection
        post={post}
        contactPost={contactPost}
        openPostHandler={openPostHandler}
        comments={comments}
        contacts={contacts}
      />
      <CommentsList comments={comments} post={post} contacts={contacts} />
      <CommentsInput
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
        post={post}
        currentUser={currentUser}
      />
    </li>
  );
};

export default Post;
