function UserProfileCircle({ initials, author, userBgColour }) {

    return (
        <div className={`${userBgColour(author)} profile-circle grid`}>
            <p className="initials-text">{initials}</p>
        </div>
    )
}

export default UserProfileCircle