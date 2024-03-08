import React, { useState } from 'react'
import UserIcon from '../Icons/UserIcon'

function CreatePost() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    return (
      <div className='post'>
          <UserIcon/>
          <input 
            className='post-input' 
            onChange={handleInputChange}
            placeholder="What's on your mind?"
           value={inputValue}/>
          <button className='post-submit-button'>Post</button>
      </div>
    )
}

export default CreatePost