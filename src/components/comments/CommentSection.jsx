import { useEffect, useState } from "react"
import Comments from './Comments';
import "../../styles/comments/CommentSection.css"
import CreateComment from "./CreateComment";
export default function CommentSection({ post }) {
    const [comments, setComments] = useState([])
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/spectraldesign/post/${post.id}/comment`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data)
            })
    }, [])

    return (
        <div className="commentSectionContainer">
            {
                comments.length > 3 && !showAll ?
                    <>
                        <p className="seePreviousCommentsButton" onClick={() => setShowAll(true)}>See previous comments</p>
                        <Comments comments={comments.slice(Math.max(comments.length - 3, 0))} />
                    </>
                    :
                    <Comments comments={comments} />
            }

            <CreateComment />
        </div>
    )
}