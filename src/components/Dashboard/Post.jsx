/* eslint-disable react/prop-types */
export default function Post({ currentUser, inputValue, setInputValue, handlePost }) {
  const firstInitial = currentUser.firstName && currentUser.firstName[0]
  const lastInitial = currentUser.lastName && currentUser.lastName[0]

  return (
      <div className="post">
          <div className="profile-icon" style={{ background: currentUser.favouriteColour }}>
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
