function LoggedInProfileCircle({ loggedInUserInitials }) {

    return (
        <div className='logged-in-user profile-circle grid'>
            <p className='initials-text'>{loggedInUserInitials}</p>
        </div>
    )
}

export default LoggedInProfileCircle