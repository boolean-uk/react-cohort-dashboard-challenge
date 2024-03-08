function ProfileTop({currentUser,}) {
    return(
        <div className="profile-top">
        <div className="profile-pic-big" style={{backgroundColor: currentUser.favouriteColour}} >{currentUser.firstName[0]}{currentUser.lastName[0]}</div>
        <h2>{currentUser.firstName} {currentUser.lastName}</h2>
    </div>
    )
}

export default ProfileTop