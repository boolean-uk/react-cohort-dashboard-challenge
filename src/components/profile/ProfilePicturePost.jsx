import React from 'react'

export default function ProfilePicturePost({ initials, color }) {
  return (
    <div className='profile-picture-post' style={{backgroundColor: color}}>
      <p className='profile-text'>{initials}</p>
    </div>

  )
}
