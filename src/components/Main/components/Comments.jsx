import arrow from '../../../assets/arrow-icon.svg'
function Comments() {
  return (
    <div className="comment">
      <div className="profile-circle"></div>
      <form className="new-comment">
        <label htmlFor="new-comment" className='new-comment--label'>
          <input
            type="text"
            id="new-comment"
            className='new-comment--input'
            name="new-comment"
            placeholder="Add a comment"
          />
          <button type="submit" className="comment-submit--button">
            <img src={arrow} alt="arrow-button" width={20} />
          </button>
        </label>
      </form>
    </div>
  );
}

export default Comments;
