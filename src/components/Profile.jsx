import ProfileForm from "./ProfileForm";

export default function Profile({ loggedInUser, setLoggedInUser }) {
    return (
        <div className="profile-container">
            <h1>Profile</h1>
            <ProfileForm loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        </div>
    )
}