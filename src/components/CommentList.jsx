import { useContext, useEffect, useState } from "react"
import { AppContext } from '../App'
import Comment from "./Comment"

function CommentList({post}) {
    const { comments } = useContext(AppContext)
    const [postComments, setPostComments] = useState([])
    const [hasCommentsHidden, setHasCommentsHidden] = useState(false)
    const [lessThanThree, setLessThanThree] = useState(true)

    useEffect(() => {
        let fComments = comments.filter((c) => c.postId === post.id)

        if (fComments.length > 3) {
            setLessThanThree(false)
            setHasCommentsHidden(true)
            fComments = fComments.slice(-3)
        } else {
            setLessThanThree(true)
            setHasCommentsHidden(false)
        }

        setPostComments([...fComments])
    }, [comments, post])

    const showComments = () => {
        let fComments = comments.filter((c) => c.postId === post.id)
        setPostComments(fComments)
        setHasCommentsHidden(false)
    }

    const hideComments = () => {
        let fComments = postComments.slice(-3)
        setPostComments(fComments)
        setHasCommentsHidden(true)
    }

    return (
        <div>
            {lessThanThree ? null :
                <div className="commentVisibility">
                    {hasCommentsHidden ?
                    <p onClick={showComments}>See previous comments</p>
                    :
                    <p onClick={hideComments}>Hide previous comments</p>}
                </div>
            }
            <ul>
            {postComments.map((comment, index) => (
                <Comment post={post} comment={comment} key={index}/>
            ))}
        </ul>
        </div>
    )
}

export default CommentList