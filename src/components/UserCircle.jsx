import { Link } from "react-router-dom"

function UserCircle({ user }) {
    let initials = ""
    let color = "white"
    let link = "/profile"

    if (user) {
        const firstInitial = user.firstName[0]
        const secondInitial = user.lastName[0]
        
        initials = firstInitial + secondInitial
        color = user.favouriteColour
        link = `/profile/${user.id}`
    }

    return (
        <Link to={link} style={{ textDecoration: 'none' }}>
            <div className="circle" style={{backgroundColor: color}}>
                <p className="circleText">{initials}</p>
            </div>
        </Link>
    )
}

export default UserCircle