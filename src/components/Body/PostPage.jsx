import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostComment from './Posts/PostComment'
import { useContext } from 'react'
import { WebsiteContext } from '../../App'
import { useState } from 'react'


function PostPage() {

    const {id} = useParams()
    const context = useContext(WebsiteContext)

    const [postUser, setPostUser] = useState()
    const [postComments, setPostComments] = useState()
    const [postContent, setPostContent] = useState()


    async function fetchPostData(){
        console.log("ID", id)
        await fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${id}`)
        .then(response => response.json())
        .then(setPostContent)


    }

    async function fetchMorePostData(){
        await fetch(`https://boolean-api-server.fly.dev/Eddy1108/contact/${postContent.contactId}`)
        .then(response => response.json())
        .then(setPostUser)
    
        await fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${postContent.id}/comment`)
        .then(response => response.json())
        .then(setPostComments)
    }

    let initials = {first: "", second: ""}
    if(postUser){
        initials = {first: postUser.firstName.charAt(0).toUpperCase(), second: postUser.lastName.charAt(0).toUpperCase()}
    }

useEffect(() => {fetch(`https://boolean-api-server.fly.dev/Eddy1108/post/${id}`)
.then(response => response.json())
.then(setPostContent)}, [])
useEffect(() => {fetchMorePostData()}, [postContent])

useEffect(() => {console.log("LOG", postContent)}, [postContent])

    
if (!postContent || !postComments || !postUser){
    return (<p>Loading...</p>)
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
                <p>{postContent.title}</p>
                <p>{postContent.content}</p>
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

export default PostPage