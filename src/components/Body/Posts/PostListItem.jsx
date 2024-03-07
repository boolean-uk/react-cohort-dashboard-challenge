import { useState, useEffect } from "react"
import "./PostListItem.css"
import PostComment from "./PostComment"

function PostListItem({post}) {

    const [postUser, setPostUser] = useState()
    const [postComments, setPostComments] = useState()

useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/${post.contactId}`)
    .then(response => response.json())
    .then(setPostUser)
  }, [])

useEffect(() => {

    fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${post.id}/comment`)
        .then(response => response.json())
        .then(setPostComments)
}, [])

        let initials = {first: "", second: ""}
        if(postUser){
            initials = {first: postUser.firstName.charAt(0).toUpperCase(), second: postUser.lastName.charAt(0).toUpperCase()}
        }
    
// useEffect(() => {console.log("LOG:", post)}, [])
    

  return (
    <div className="user-post-container">
        <div className='user-post-header'>
            <div className="user-profile-picture-post">
                {initials.first && initials.second ? (
                <div className="initials">{`${initials.first}${initials.second}`}</div>
                ) : (
                <div className="initials">NN</div>
                )}
            </div>
            <div className='user-post-header'> {postUser ? <p>{postUser.firstName} {postUser.lastName}</p> : "Anon"}</div>
        </div>
        <div className='user-post-content'>
            <p>{post.title}</p>
            <p>{post.content}</p>
        </div>  
        <ul className="post-comments">
        {postComments ? postComments.map((item, i) =>
            <li className="post-list-element" key={i}>
                <PostComment comment={item} />
            </li>) : <p>Loading...</p>}
        </ul>

        
    </div>
  )
}

export default PostListItem