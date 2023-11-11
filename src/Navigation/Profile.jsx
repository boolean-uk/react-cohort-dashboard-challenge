import ProfileLogo from "../Navigation/ProfileLogo.svg"


function Profile() {
    return(
        <div className="home">
            <img src={ProfileLogo} alt="profile logo" />
            <p><strong>Profile</strong></p>
        </div>
    )
}

export default Profile