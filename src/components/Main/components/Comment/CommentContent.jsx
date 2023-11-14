import PostComments from './PostComments'
import AddNewComment from './AddNewComment'
import { useEffect, useState } from 'react'

function CommentContent({ post, loggedInUser, loggedInUserInitials, URL }) {

    const [allComments, setAllComments] = useState(null)
    const [showThreeComments, setShowThreeComments] = useState(null)
    const [displayComments, setDisplayComments] = useState(null)
    const [showAll, setShowAll] = useState(false)

    // FETCH ALL COMMENTS
    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
        // fetch(`${URL}/post/${1}/comment`)
            .then(res => res.json())
            .then(data => {
                setAllComments(data)
                setShowAll(true)
            })
    }, [URL, post])

    // FETCH THREE COMMENTS PER POST
    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
            .then(res => res.json())
            .then(data => {
                setShowThreeComments(data.splice(0, 3))
                setShowAll(false)
            })
    }, [URL, post])

    const [showCommentTitle, setShowCommentTitle] = useState('Show previous comments')

    function handleToggle() {
        if (!showAll) {
            setShowCommentTitle('Collapse comments')
        }
        else {
            setShowCommentTitle('Show previous comments')
        }
        setShowAll(!showAll)
    }

    useEffect(() => {
        if (showAll) {
            setDisplayComments(allComments)
        }
        else setDisplayComments(showThreeComments)
    }, [allComments, showAll, showThreeComments])


    if (!allComments || !showThreeComments || !displayComments) return <p>Comment not available</p>

    if (allComments.length > 3) {
        return (
            <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                <h4 className='toggle-comments comment-title' onClick={() => handleToggle()}>{showCommentTitle}</h4>
                {displayComments.map((comment) =>
                    <PostComments key={comment.id} comment={comment} URL={URL} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL}setAllComments={setAllComments} />
        </section>
        )
    }

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                <h4 className='comment-title'>No more comments to display</h4>
                {showThreeComments.map((comment) =>
                    <PostComments key={comment.id} comment={comment} URL={URL} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL}setAllComments={setAllComments} />
        </section>
    )
}

export default CommentContent