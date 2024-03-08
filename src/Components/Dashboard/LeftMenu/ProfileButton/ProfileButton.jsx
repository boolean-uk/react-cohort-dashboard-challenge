import { useContext } from 'react'
import profileIcon from '../../../../assets/profile-icon.svg'
import "./ProfileButton.css"
import { UserContext } from '../../../../App'
import { Link } from 'react-router-dom'

function ProfileButton() {
  const { user } = useContext(UserContext)

  return (
    <Link to={`/profile/${user.id}`} >
      <div className='profile-button'>
        <img src={profileIcon} alt="Profile button" />
        <p>Profile</p>
      </div>
    </Link>
  )
}

export default ProfileButton
