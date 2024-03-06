import "./AccountIcon.css"
import PropTypes from 'prop-types'

const AccountIcon = ({user}) => {
    return (
        <div className="account-options-header">
            <div 
                className="profile-icon-background" 
                style={{backgroundColor: user.favouriteColour}}
            >
                {user && <p>{user?.firstName.substring(0,1)}{user?.lastName.substring(0,1)}
                </p>}
            </div>
        </div>
    )
}

AccountIcon.propTypes = {
    user: PropTypes.object,
}

export default AccountIcon