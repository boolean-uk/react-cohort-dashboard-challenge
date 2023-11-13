import EachPost from "./EachPost";

function MainContent({
  newPost,
  setNewPost,
  mainPostSubmit,
  reversedPostData,
  contacts,
  postComments,
  handleSubmit,
  commentInputs,
  mainUserInitials,
  handleCommentChange,
}) {
  
  return (
    <div className="main-content">
      <div className="each-post">
        <div className="main-postbox">
          <form onSubmit={mainPostSubmit}>
            <label>
              <div className="user-post-logo">{mainUserInitials}</div>
              <input
                className="main-input"
                type="text"
                id=""
                name=""
                value={newPost}
                placeholder="What's on your mind?"
                onChange={(e) => setNewPost(e.target.value)}
              ></input>
            </label>
            <button type="submit" className="main-postbutton">
              Post
            </button>
          </form>
        </div>

        <ul className="full-comment-ul">
          {reversedPostData.map((post) => (
            <EachPost
              key={post.id}
              post={post}
              contacts={contacts}
              postComments={postComments}
              mainUserInitials={mainUserInitials}
              handleSubmit={handleSubmit}
              commentInputs={commentInputs}
              handleCommentChange={handleCommentChange}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainContent;