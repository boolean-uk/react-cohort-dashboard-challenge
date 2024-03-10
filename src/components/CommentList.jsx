import CommentItem from './CommentItem';

function CommentList({ post, circleStyle }) {
  return (
    <>
      {post && post.comments.length > 0 ? (
        post.comments.map(comment => (
          <CommentItem key={comment.id} comment={comment} post={post} circleStyle={circleStyle} />
        ))
      ) : (
        <p>Be the first to comment on this post! :)</p>
      )}
    </>
  );
}

export default CommentList;
