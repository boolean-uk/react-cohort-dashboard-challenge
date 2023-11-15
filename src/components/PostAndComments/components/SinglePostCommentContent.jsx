import AddNewComment from "../../Main/components/Comment/AddNewComment"
import SinglePostComments from "./SinglePostComments"

import { useEffect, useState } from "react"

function SinglePostCommentContent({ post, URL, loggedInUser, loggedInUserInitials }) {

    const [allComments, setAllComments] = useState(null)
    const [shouldGetComments, setShouldGetComments] = useState(true)

    useEffect(() => {
      shouldGetComments
      fetch(`${URL}/post/${post.id}/comment`)
        .then(res => res.json())
        .then(data => {
            setAllComments(data)
            setShouldGetComments(false)
        })
    }, [URL, post, shouldGetComments])

    if (!allComments) return <p>Comments not available</p>

    return (
        <section className="comment-container grid">
            <ul className='post-comments-list grid'>
                {allComments.map((comment) =>
                    <SinglePostComments key={comment.id} comment={comment} URL={URL} post={post} setShouldGetComments={setShouldGetComments} />
                )}
            </ul>
            <AddNewComment post={post} loggedInUser={loggedInUser} loggedInUserInitials={loggedInUserInitials} URL={URL} setAllComments={setAllComments} />
        </section>
    )
}

export default SinglePostCommentContent