import UserIcon from "../UserIcon";
import { useState } from "react";

export default function AddComments ({users, posts, setPosts, postId, post, comments, setComments}) {
    const [commentValue, setCommentValue] = useState("")

    // console.log(post)

    function handleSubmit (event) {
        event.preventDefault()
        // console.log(commentValue)
        // add logic to set up new comment
        fetch(`https://boolean-uk-api-server.fly.dev/Alistair1080/post/${postId}/comment`, {
            method: "POST",
            body: JSON.stringify({
                contactId: 1,
                postId: post.id,
                content: commentValue,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })


        setComments([...comments, {contactId: 1,
                    postId: post.id,
                    content: commentValue,
                id: posts.length + comments.length + 50}])


        setCommentValue("")
    }

    function handleChange (event) {
        setCommentValue(event.target.value)
    }

    return (
        <div className="addCommentContainer">
            <UserIcon userInfo={users[0] || {firstName: "A", lastName: "W"}} />
            <form className="addForm" onSubmit={handleSubmit}>
                <input className="addCommentInput" type="text" placeholder="Add a comment.." value={commentValue} onChange={handleChange}/>
                <button className="planeButton" type="submit">
                    <svg className="plane" viewBox="0 -0.5 21 21" id="meteor-icon-kit__regular-paper-plane" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.72076 11L2.68973 17.0931L17.664 10L2.68973 2.90692L4.72076 9H10C10.5523 9 11 9.4477 11 10C11 10.5523 10.5523 11 10 11H4.72076zM2.94591 10L0.05132 1.31623C-0.22718 0.48074 0.63218 -0.28074 1.42809 0.09626L20.4281 9.0963C21.1906 9.4575 21.1906 10.5425 20.4281 10.9037L1.42809 19.9037C0.63218 20.2807 -0.22718 19.5193 0.05132 18.6838L2.94591 10z" fill="#758CA3"/></svg>
                </button>
            </form>

        </div>
    )
}