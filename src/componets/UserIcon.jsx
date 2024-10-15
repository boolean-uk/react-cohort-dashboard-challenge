

function UserIcon(props) {
    const {user} = props
    return(
        <div className="userIcon" style={{backgroundColor: user.favouriteColour}} >
            {user.firstName[0] + user.lastName[0]}
        </div>
    )   
}

export default UserIcon