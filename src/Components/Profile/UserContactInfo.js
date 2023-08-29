function UserContactInfo(props) {
    const { userData } = props;
    return (
        <div className="user-contact-info">
            <h2>Contact Info</h2>
            <div className="detail">
                <span>Phone:</span> {userData.phone}
            </div>
            <div className="detail">
                <span>Website:</span> {userData.website}
            </div>
        </div>
    );
}

export default UserContactInfo;
