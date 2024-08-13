import Author from "../../authorName/postAuthor";
import PostTitle from "./postTitle";

const PostHeader = ({
  post,
  openPostHandler,
  currentUser,
  comments,
  contacts,
}) => {
  return (
    <div>
      <Author currentUser={currentUser} />
      <PostTitle
        openPostHandler={openPostHandler}
        post={post}
        comments={comments}
        contacts={contacts}
      />
    </div>
  );
};

export default PostHeader;
