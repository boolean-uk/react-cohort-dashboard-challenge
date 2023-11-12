import SubmitCommentArrow from '../../../../../_assets/submit-comment-arrow.svg'

function AddCommentForm() {

    return (
        <form className="new-comment grid">
                <label className="new-comment-label" htmlFor="new-comment">
                    <input className="new-comment-input"
                        type="text"
                        id="new-comment"
                        name="new-comment"
                        placeholder="Add a comment..."
                        // value='new-comment'
                    />
                </label>
                <button className="comment-submit-button" type="submit">
                    <img className='submit-comment-arrow' src={SubmitCommentArrow} width={30} alt="submit comment arrow" />
                </button>
            </form>
    )
}

export default AddCommentForm