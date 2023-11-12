import { useState } from 'react'
import SubmitCommentArrow from '../../../../../_assets/submit-comment-arrow.svg'

function AddCommentForm({ post, loggedInUser, URL, setShowComments }) {

    const [newCommentText, setNewCommentText] = useState('')


    const newComment = {
        id: '',
        postId: post.id,
        contactId: loggedInUser.id,
        content: newCommentText
    }

    function createNewComment() {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
        }

        fetch(`${URL}/post/${post.id}/comment`, options)
            .then(res => res.json())
            .then((data) => setShowComments(data))
    }

    function handleNewCommentSubmit(e) {
        e.preventDefault
        createNewComment()
        newCommentText('')
    }

    return (
        <form className="new-comment grid" onSubmit={handleNewCommentSubmit}>
                <label className="new-comment-label" htmlFor="new-comment">
                    <input className="new-comment-input"
                        type="text"
                        id="new-comment"
                        name="new-comment"
                        placeholder="Add a comment..."
                        onChange={e => setNewCommentText(e.target.value)}
                        value={newCommentText}
                    />
                </label>
                <button className="comment-submit-button" type="submit">
                    <img className='submit-comment-arrow' src={SubmitCommentArrow} width={30} alt="submit comment arrow" />
                </button>
            </form>
    )
}

export default AddCommentForm