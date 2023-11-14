function PostContent({ author, post,user ,loggedInUserColor}) {
  return (
    <div className="post-content">
      <section className="details">
        <div className={` profile-circle--user`}>
          <h3>
            {user}
          </h3>
        </div>
        <div className="titles">
          <div className="authur-name">
            <h4>
              {author.firstName} {author.lastName}
            </h4>
          </div>
          <div className="post-title">
            <h5>{post.title}</h5>
          </div>
        </div>
      </section>
      <div className="post-content--text">
        <p>{post.content}</p>
      </div>
    </div>
  );
}

export default PostContent;
