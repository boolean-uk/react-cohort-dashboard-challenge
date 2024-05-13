export default function ProfileImage({ loggedInUser }) {
    return (
        <div className="profile-image-container">
            <div className="profile-image">
                <p>{`${loggedInUser.firstName[0]}${loggedInUser.lastName[0]}`}</p>
            </div>
        </div>
    )
}