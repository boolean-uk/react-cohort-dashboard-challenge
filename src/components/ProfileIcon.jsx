
function ProfileIcon({ matchingContact, initials }) {
    return (
        <div className='profile-container'>
            <div
                className="profile_circle"
                style={{ backgroundColor: matchingContact.favouriteColour }}>
                <div className="profile-text">{initials}</div>
            </div>
        </div>
    )
}

export default ProfileIcon