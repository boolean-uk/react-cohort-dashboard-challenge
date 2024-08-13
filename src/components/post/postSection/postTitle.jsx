const PostTitle = ({post, openPostHandler, comments, contacts}) => {
  return (
    <p>
      <span onClick={() => openPostHandler(post, comments, contacts)}>{post.title}</span>
    </p>
  );
};

export default PostTitle