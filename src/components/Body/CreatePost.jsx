import React from 'react'
import "./CreatePost.css"
import { useContext } from 'react'
import { WebsiteContext } from '../../App'

function CreatePost() {
  const context = useContext(WebsiteContext)
  const initials = {first: context.profile.firstName.charAt(0).toUpperCase(), second: context.profile.lastName.charAt(0).toUpperCase()}

  //Add actual POST functions

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
      <div className='create-post-header'><p>What's on your mind {context.profile.firstName} {context.profile.lastName}?</p></div>
    </div>
    <div className='post-content'>
      <input type="text" id="post-title" placeholder="Enter post title"/>
      <textarea id="post-body" placeholder="Enter post body"></textarea>
    </div>
    <button onclick="createPost()">Post</button>
  </div>
  )
}

export default CreatePost