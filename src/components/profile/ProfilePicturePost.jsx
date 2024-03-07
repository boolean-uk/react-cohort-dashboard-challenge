import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePicturePost({ initials, color, author }) {
  const navigate = useNavigate();
  return (
    <div className='profile-picture-post' style={{backgroundColor: color}} onClick={() => navigate(`profile/${author.id}`)} >
      <p className='profile-text'>{initials}</p>
    </div>

  )
}
