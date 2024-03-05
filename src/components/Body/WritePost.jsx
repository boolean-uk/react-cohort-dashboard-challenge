import "./Body.css";
export default function WritePost() {
  return (
    <>
      <div className="post-box">
        <form>
          <label className="profile-icon">VA</label>
          <input
            type="text"
            placeholder="What's on your mind...?"
            className="form-input"
          />

          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}
