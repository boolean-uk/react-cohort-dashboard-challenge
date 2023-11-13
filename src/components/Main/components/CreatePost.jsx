function CreatePost() {
  return (
    <form className="create-post">
      <div className="profile-circle"></div>
      <div className="create-post--input">
        <input  className="input-post" type="text" placeholder="What's on your mind?" />
      </div>
      <div className="post-button">
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default CreatePost;
