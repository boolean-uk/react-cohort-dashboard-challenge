import { UserContext } from '../App'
import { useContext } from 'react'
import PropTypes from 'prop-types'

export default function ProfilePicture({ author }) {
    
    const { user } = useContext(UserContext) //accessing user context and extracting the user object

    //render profile picture initials, checking if user object exists and display the initals based from author or user.
    if (user) {
        return (
            <span
                className="profile-picture"
                style={{ backgroundColor: typeof author === "object" ? author.favouriteColour : user.favouriteColour }}
            >
                {author && Object.keys(author).length > 0 ? author.firstName[0] + author.lastName[0] : user.firstName[0] + user.lastName[0]}
            </span>
        )
    } else {
        return null
    }
}

ProfilePicture.propTypes = {
    author: PropTypes.object
}