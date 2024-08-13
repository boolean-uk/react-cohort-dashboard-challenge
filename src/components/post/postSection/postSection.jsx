import TitleSection from "./titleSection";

const PostSection = ({
  post,
  contactPost,
  openPostHandler,
  comments,
  contacts,
}) => {
  return (
    <section>
      <TitleSection
        post={post}
        contactPost={contactPost}
        openPostHandler={openPostHandler}
        comments={comments}
        contacts={contacts}
      />
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
