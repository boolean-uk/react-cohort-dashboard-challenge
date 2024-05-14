import { Link } from "react-router-dom";

export default function ProfileImage({ loggedInUser }) {
    return (
        <Link to='/profile'>
            <div className="profile-image-container">
                {loggedInUser && 
                    <div className="profile-image" style={{backgroundColor:`${loggedInUser.favouriteColour}`}}>
                        {loggedInUser && <p>{`${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`}</p>}
                    </div>
                }
            </div>
        </Link>
    )
}