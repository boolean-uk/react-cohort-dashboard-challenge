import arrow from '../../../assets/arrow-icon.svg'

function CommentForm() {
  return (
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
  )
}

export default CommentForm