import { useContext } from "react";
import { UserContext } from "../App";


export default function ProfileImage({ author }) {

    const {user} = useContext(UserContext)


    if(user){return (
        <span
            className="profile-image"
            style={{ backgroundColor: typeof author === "object" ? author.favouriteColour : user.favouriteColour }}
        >
            {author && Object.keys(author).length > 0 ? author.firstName[0] + author.lastName[0] : user.firstName[0] + user.lastName[0]}
        </span>
    )}
}
