import userBgColour from "../../Shared/UserBgColour"

function ProfileFormProfileCircle({ initials, author }) {

    return (
        <div className={`${userBgColour(author)} profile-form-circle grid`}>
            <p className="profile-form-initials-text">{initials}</p>
        </div>
    )
}

export default ProfileFormProfileCircle