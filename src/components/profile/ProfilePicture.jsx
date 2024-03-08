import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';

export default function ProfilePicture({ initials, color}) {
  const navigate = useNavigate();
  const user = useContext(UserContext)

  return (
    <div className='profile-picture' style={{backgroundColor: color}} onClick={() => navigate(`/profile/${user.id}`)} >
      {initials}
    </div>

  )
}
