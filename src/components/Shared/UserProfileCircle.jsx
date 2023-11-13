import userBgColour from "./UserBgColour"

function UserProfileCircle({ initials, author }) {

    return (
        <div className={`${userBgColour(author)} profile-circle grid`}>
            <p className="initials-text">{initials}</p>
        </div>
    )
}

export default UserProfileCircle