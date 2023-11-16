import { useNavigate } from 'react-router-dom'
import profileIcon from '../../../../_assets/profile-icon.svg'

function ProfileIcon({ currentSelect, setCurrentSelect, loggedInUser }) {

    const navigate = useNavigate()

    function profileHighlight(currentSelect) {
        if (currentSelect === 'profile') {
            return 'current-select'
        }
        else return 'not-current'
    }

    return (
        <div className={`nav-icon-container grid ${profileHighlight(currentSelect)}`} onClick={() => {
            setCurrentSelect('profile')
            navigate(`/profile/${loggedInUser.id}`)
        } }>
            <img className='nav-icon-img' src={profileIcon} alt="profile icon" />
            <p className='nav-icon-text'>Profile</p>
        </div>   
    )
}

export default ProfileIcon
