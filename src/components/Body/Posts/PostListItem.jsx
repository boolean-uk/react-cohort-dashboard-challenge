import { useState, useEffect, useContext } from "react"
import "./PostListItem.css"
import PostComment from "./PostComment"
import { WebsiteContext } from "../../../App"
import { Link } from "react-router-dom"

function PostListItem({post}) {
    const context = useContext(WebsiteContext)


    const [postUser, setPostUser] = useState()
    const [postComments, setPostComments] = useState()
    const [userComment, setUserComment] = useState({
        postId: post.id,
        contactId: context.profile.id,
        content: ""
    })
    const [commentContent, setCommentContent] = useState("")


function fetchCommentData(){
    fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/${post.contactId}`)
    .then(response => response.json())
    .then(setPostUser)

    fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${post.id}/comment`)
    .then(response => response.json())
    .then(setPostComments)
}

useEffect(() => {
    fetchCommentData()
  }, [])


        let initials = {first: "", second: ""}
        if(postUser){
            initials = {first: postUser.firstName.charAt(0).toUpperCase(), second: postUser.lastName.charAt(0).toUpperCase()}
        }
    
// useEffect(() => {console.log("LOG:", userComment)}, [userComment])

async function postComment(click){

    if(commentContent === "") {
        console.log("Cannot make empty post!")
        return
    }

    setUserComment({
        postId: post.id,
        contactId: context.profile.id,
        content: commentContent
    })

    await fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${post.id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: post.id,
            contactId: context.profile.id,
            content: commentContent
        }),
      })
    .then(response => response.json())
    // .then(data => console.log("POST?", data))

    setCommentContent("")

    fetchCommentData()
}
    

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
            <Link to={`/post/${post.id}`}>
            <p>{post.title}</p> 
            </Link>
            <p>{post.content}</p>
        </div>  
        <ul className="post-comments">
        {postComments ? postComments.map((item, i) =>
            <li className="post-list-element" key={i}>
                <PostComment comment={item} />
            </li>) : <p>Loading...</p>}
            <li className="user-comment-element">
                <div className="user-profile-picture-post">
                    {context.profile ? (
                    <div className="initials">{`${context.profile.firstName.charAt(0).toUpperCase()}${context.profile.lastName.charAt(0).toUpperCase()}`}</div>
                    ) : (
                    <div className="initials">NN</div>
                    )}
                </div>
                <input type="text" id="post-comment" placeholder="Add a comment..." value={commentContent} onChange={(change) => setCommentContent(change.target.value)}/>
                <button onClick={postComment}>Post</button>
            </li>
        </ul>

        
    </div>
  )
}

export default PostListItem