import React, { useState } from 'react'
import "./CreatePost.css"
import { useContext } from 'react'
import { WebsiteContext } from '../../App'
import { PostContext } from './Dashboard'

function CreatePost() {
  const {profile} = useContext(WebsiteContext)
  const {fetchPosts} = useContext(PostContext)
  const initials = {first: profile.firstName.charAt(0).toUpperCase(), second: profile.lastName.charAt(0).toUpperCase()}

  const [postData, setPostData] = useState({
    title: "",
    content: "",
    contactId: profile.id
  })

  function handleInput(e){
    const{name, value} = e.target
    setPostData({...postData, [name]: value})
}

  //Add actual POST functions
async function postPost(){

  await fetch("https://boolean-api-server.fly.dev/Eddy1108/post", {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(postData)
            })

  setPostData({
    title: "",
    content: "",
    contactId: profile.id
  })
  
  fetchPosts()

  console.log("POSTED")
}

  return (
    <div className="create-post-container">
      <div className='post-header'>
            <div className="profile-picture-post">
        {initials.first && initials.second ? (
          <div className="initials">{`${initials.first}${initials.second}`}</div>
        ) : (
          <div className="initials">NN</div>
        )}
      </div>
      <div className='create-post-header'><p>What's on your mind {profile.firstName} {profile.lastName}?</p></div>
    </div>
    <div className='post-content'>
      <input type="text" id="post-title" name='title' placeholder="Enter post title" value={postData.title} onChange={handleInput}/>
      <textarea id="post-body" name='content' placeholder="Enter post body" value={postData.content} onChange={handleInput}></textarea>
    </div>
    <button onClick={postPost}>Post</button>
  </div>
  )
}

export default CreatePost