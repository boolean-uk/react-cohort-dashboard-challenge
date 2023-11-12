import PostComments from './PostComments'
import AddNewComment from './AddNewComment'
import { useEffect, useState } from 'react'

function CommentContent({ post, loggedInUser, loggedInUserInitials, URL, userBgColour }) {

    const [showComments, setShowComments] = useState(null)

    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
            .then(res => res.json())
            .then(data => setShowComments(data))
    }, [URL, post])
    
    if (!showComments) return <p>Comment not available</p>

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                {showComments.map((comment) => 
                    <PostComments key={comment.id} comment={comment} URL={URL} userBgColour={userBgColour} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL}setShowComments={setShowComments} />
        </section>
    )
}

export default CommentContent