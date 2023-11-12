import PostComments from './PostComments'
import AddNewComment from './AddNewComment'
import { useEffect, useState } from 'react'

function CommentContent({ loggedInUserInitials, URL, userBgColour }) {

    const [showComments, setShowComments] = useState(null)

    useEffect(() => {
        fetch(`${URL}/post/1/comment`)
            .then(res => res.json())
            .then(data => setShowComments(data))
    }, [URL])
    
    // console.log(showComments)
    if (!showComments) return <p>Comment removed</p>

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                {showComments.map((comment) => 
                    <PostComments key={comment.id} comment={comment} URL={URL} userBgColour={userBgColour} />
                )}
            </ul>
            <AddNewComment loggedInUserInitials={loggedInUserInitials} />
        </section>
    )
}

export default CommentContent