import profileIcon from '../../../../assets/profile-icon.svg'

function ProfileButton() {
  return (
    <div className='profile-button'>
      <img src={profileIcon} alt="Profile button" />
      <p>Profile</p>
    </div>
  )
}

export default ProfileButton
