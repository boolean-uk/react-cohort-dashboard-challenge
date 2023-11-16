import { useNavigate } from "react-router-dom"
import userBgColour from "./UserBgColour"

function UserProfileCircle({ initials, author }) {

    const navigate = useNavigate()

    return (
        <div className={`${userBgColour(author)} profile-circle grid`} onClick={() => navigate(`/profile/${author.id}`)}>
            <p className="initials-text">{initials}</p>
        </div>
    )
}

export default UserProfileCircle