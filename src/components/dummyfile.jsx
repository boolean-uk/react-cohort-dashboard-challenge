return (
    <div className="profile-circle">
      {/* Display post details */}
      {post && (
        <>
          <h2>{poster.firstName} {poster.lastName}</h2>
          <h5>{post.title}</h5>
          <p>{post.content}</p>
          <ul>
            {comments.map((comment, index) => (
              <div className="comment" key={comment.id}>
                <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
                  {getInitials(commentAuthors()[index])}
                </div>
                <h6>{commentAuthors()[index].firstName} {commentAuthors()[index].lastName}</h6>
                <p>{comment.content}</p>
              </div>
            ))}
          </ul>
        </>
      )}

      {/* Display comments */}
      <h4>Comments</h4>
      {comments.map((comment, index) => (
        <div className="comment" key={index}>
          <div className="profile-circle" style={{ backgroundColor: getRandomColor() }}>
            {getInitials(comment.author)}
          </div>
          <h6>{comment.author.firstName} {comment.author.lastName}</h6>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );