import React, {useState} from 'react'
import UserIcon from '../Icons/UserIcon'
import SendIcon from '../Icons/SendIcon';

function CommentBar() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    };

    return (
      <div className='comment-bar-container'>
          <UserIcon/>
          <div className='comment-bar'>
            <input 
              className='comment-bar-input' 
              onChange={handleInputChange}
              placeholder="Add a comment..."
              value={inputValue}
            />
            <button className='comment-bar-button'>
                <SendIcon />
            </button>
          </div>
      </div>
    )
}

export default CommentBar