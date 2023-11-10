import submitCommentArrow from '../../../../_assets/submit-comment-arrow.svg'

function Comments({ loggedInUserInitials }) {

    return (
        <section className="comment grid">
            <div className="logged-in-user profile-circle grid">
                <p className="initials-text">{loggedInUserInitials}</p>
            </div>
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
                    <img className='submit-comment-arrow' src={submitCommentArrow} width={30} alt="submit comment arrow" />
                </button>
            </form>
        </section>
    )
}

export default Comments