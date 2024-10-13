import Avatar from "./Avatar";
import PostComment from "./PostComment";

function Post({ title, content, firstName, lastName, favouriteColour, postId, comments, addComment }) {
  const authorName = `${firstName} ${lastName}`; 

  const handleAddComment = (commentContent) => {
    if (commentContent.trim()) {
      addComment(postId, commentContent);
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <Avatar name={authorName} favouriteColour={favouriteColour} />
        <div className="post-user">
          <h3 className="post-title">{authorName}</h3>
          <p className="post-subtitle">{title}</p>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <span className="line" />

      <div className="post-comments">
        {comments && comments.length > 0 && comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <Avatar name={`${comment.firstName} ${comment.lastName}`} favouriteColour={comment.favouriteColour} />
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      <PostComment 
        authorName={authorName} 
        favouriteColour={favouriteColour} 
        onAddComment={handleAddComment} 
      />
    </div>
  );
}

export default Post;
