import profileIcon from '../../../../_assets/profile-icon.svg'

function ProfileIcon({ currentSelect, setCurrentSelect }) {

    function profileHighlight(currentSelect) {
        if (currentSelect === 'profile') {
            return 'current-select'
        }
        else return 'not-current'
    }

    return (
        <div className={`nav-icon-container grid ${profileHighlight(currentSelect)}`} onClick={() => setCurrentSelect('profile')}>
            <img className='nav-icon-img' src={profileIcon} alt="profile icon" />
            <p className='nav-icon-text'>Profile</p>
        </div>   
    )
}

export default ProfileIcon