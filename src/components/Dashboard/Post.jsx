import { useState } from 'react';

/* eslint-disable react/prop-types */
export default function Post({ currentUser }) {
  const { firstName = '', lastName = '', favouriteColour } = currentUser
  const [inputValue, setInputValue] = useState('')

  const handlePost = () => {
    // To do logic..
    setInputValue('')
  }

  const firstInitial = firstName && firstName[0]
  const lastInitial = lastName && lastName[0]

  return (
    <div className="post">
      <div className="profile-icon" style={{ background: favouriteColour }}>
        {firstInitial} {lastInitial}
      </div>
      <input 
        type="text" 
        className="text-field" 
        placeholder="What's on your mind?" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      /> 
      <button className="button" onClick={handlePost}>Post</button>
    </div>
  )
}
