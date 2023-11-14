import PostComments from "../../Main/components/Comment/PostComments"
import AddNewComment from "../../Main/components/Comment/AddNewComment"

import { useEffect, useState } from "react"

function SinglePostCommentContent({ post, URL, loggedInUser, loggedInUserInitials }) {

    const [allComments, setAllComments] = useState(null)

    useEffect(() => {
        fetch(`${URL}/post/${post.id}/comment`)
            .then(res => res.json())
            .then(data => setAllComments(data))
    }, [URL, post])

    if (!allComments) return <p>Comments not available</p>

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                {allComments.map((comment) =>
                    <PostComments key={comment.id} comment={comment} URL={URL} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL} setAllComments={setAllComments} />
        </section>
    )
}

export default SinglePostCommentContent