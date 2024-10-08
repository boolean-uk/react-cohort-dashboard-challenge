import { useState, useContext } from 'react'
import IconUser from '../IconUser'
import { AppContext } from "../../App"

// eslint-disable-next-line react/prop-types
export default function MakeComment({posts, id, post, comments, setComments}) {
    const [comment, setComment] = useState('')
    const { loggedIn} = useContext(AppContext)

    function ManageSubmission(e) {
        e.preventDefault()
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${id}/comment`, {
            method: "POST",
            body: JSON.stringify({
                contactId: 1,
                // eslint-disable-next-line react/prop-types
                postId: post.id,
                content: comment,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        setComments([...comments, { contactId: 1, 
                                    // eslint-disable-next-line react/prop-types
                                    postId: post.id,
                                    content: comment,
                                    // eslint-disable-next-line react/prop-types
                                    id:posts.length + comments.length + 50}])
        setComment('')
        
    }

    function ManageChange(e) {
        setComment(e.target.value)
    }

    return (
        <div className='addComment'>
            <IconUser user={loggedIn}/>
            <form className='addForm' onSubmit={ManageSubmission}>
                <input className='makeCommentInput' type='text' placeholder='Add a comment..' value={comment} onChange={ManageChange}/>
                <div className='sendBtn'>
                    <button className='plainButton' type='submit'>
                        <svg className='plain' viewBox="0 -0.5 21 21" id="meteor-icon-kit__regular-paper-plane" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.72076 11L2.68973 17.0931L17.664 10L2.68973 2.90692L4.72076 9H10C10.5523 9 11 9.4477 11 10C11 10.5523 10.5523 11 10 11H4.72076zM2.94591 10L0.05132 1.31623C-0.22718 0.48074 0.63218 -0.28074 1.42809 0.09626L20.4281 9.0963C21.1906 9.4575 21.1906 10.5425 20.4281 10.9037L1.42809 19.9037C0.63218 20.2807 -0.22718 19.5193 0.05132 18.6838L2.94591 10z" fill="#758CA3"/></svg>
                    </button>
                </div>
            </form>
        </div>
    )
}