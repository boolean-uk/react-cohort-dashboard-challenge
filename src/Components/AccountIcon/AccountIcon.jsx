import "./AccountIcon.css"

const user = {
    firstName: "Alex",
    lastName: "Walker"
}

const AccountOptions = () => {
    return (
        <div className="account-options-header">
            <div className="profile-icon-background">
                <p>{user.firstName.substring(0,1)}{user.lastName.substring(0,1)}
                </p>
            </div>
        </div>
    )
}

export default AccountOptions