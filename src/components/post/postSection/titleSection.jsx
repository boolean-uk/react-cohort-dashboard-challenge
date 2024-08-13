import InitialsButton from "../../buttons/initialsButton";
import PostHeader from "./postHeader";

const TitleSection = ({
  post,
  contactPost,
  openPostHandler,
  comments,
  contacts,
}) => {
  return (
    <div className="section-title">
      <InitialsButton currentUser={contactPost} />
      <PostHeader
        currentUser={contactPost}
        post={post}
        openPostHandler={openPostHandler}
        comments={comments}
        contacts={contacts}
      />
    </div>
  );
};

export default TitleSection;
