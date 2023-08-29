function UserInfoBox(props) {
    const { userData } = props;
    const nameArray = userData.name.split(" ");
    const firstName = nameArray.slice(0, -1).join(" ");
    const lastName = nameArray[nameArray.length - 1];
    return (
        <div className="user-info-box">
            <h2>Account info</h2>
            <div className="detail">
                <span>First Name:</span> {firstName}
            </div>
            <div className="detail">
                <span>Last Name:</span> {lastName}
            </div>
            <div className="detail">
                <span>Username:</span> {userData.username}
            </div>
            <div className="detail">
                <span>Email:</span> {userData.email}
            </div>
        </div>
    );
}

export default UserInfoBox;
