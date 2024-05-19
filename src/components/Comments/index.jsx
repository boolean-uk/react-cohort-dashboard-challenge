/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import { MyContext } from "../../App"
import "./Comments.css"
import Comment from "../Comment"

export default function Comments({ postId, limit }) {

    const [comments, setComments] = useState([])
    const { API_POSTS } = useContext(MyContext)

    async function fetchComments() {
        const response = await fetch(`${API_POSTS}/${postId}/comment`);
        const comments = await response.json();
        setComments(comments);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchComments() }, [postId])

    return (
        <>
            <div className="comment-wrapper">
                <div>{comments.length > limit ? <Link to="/post"><p><span>See previous comments</span></p></Link>:<></>}</div>
                {comments.map((comment, index) => {
                    if(index < limit){
                        return <Comment key={comment.id} comment={comment}/>
                    }
                })}
            </div>
        </>
    )
}