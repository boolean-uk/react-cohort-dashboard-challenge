import PostComments from './PostComments'
import AddNewComment from './AddNewComment'
import { useEffect, useState } from 'react'

function CommentContent({ post, loggedInUser, loggedInUserInitials, URL }) {

    const [allComments, setAllComments] = useState(null)
    const [showThreeComments, setShowThreeComments] = useState(null)

    // FETCH ALL COMMENTS
    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
        // fetch(`${URL}/post/${1}/comment`)
            .then(res => res.json())
            .then(data => setAllComments(data))
    }, [URL, post])

    // FETCH THREE COMMENTS PER POST
    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
            .then(res => res.json())
            .then(data => setShowThreeComments(data.splice(0, 3)))
    }, [URL, post])

    console.log(showThreeComments)
    
    if (!allComments) return <p>Comment not available</p>

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                {showThreeComments.map((comment) => 
                    <PostComments key={comment.id} comment={comment} URL={URL} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL}setAllComments={setAllComments} />
        </section>
    )
}

export default CommentContent