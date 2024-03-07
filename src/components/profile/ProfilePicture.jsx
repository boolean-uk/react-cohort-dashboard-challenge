import React from 'react'

export default function ProfilePicture({ initials, color}) {
  return (
    <div className='profile-picture' style={{backgroundColor: color}}>
      {initials}
    </div>

  )
}
