import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfilePicture({ initials, color}) {
  const navigate = useNavigate();
  return (
    <div className='profile-picture' style={{backgroundColor: color}} onClick={() => navigate("/profile")} >
      {initials}
    </div>

  )
}
