function ProfileHeader({ user }) {
    return (
        <div className="profileHead">
            <span className="initials">{user.firstName[0]}{user.lastName[0]}</span>
            <h1>{user.firstName} {user.lastName}</h1>
        </div>

    )
}

export default ProfileHeader