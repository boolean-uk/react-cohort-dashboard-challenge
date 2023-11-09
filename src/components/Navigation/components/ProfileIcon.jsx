import profileIcon from '../../../../_assets/profile-icon.svg'

function ProfileIcon() {

    return (
        <div className='nav-icon-container'>
            <img className='nav-icon-img' src={profileIcon} alt="profile icon" />
            <p className='nav-icon-text'>Profile</p>
        </div>   
    )
}

export default ProfileIcon