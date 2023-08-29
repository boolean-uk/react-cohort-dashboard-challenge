function UserAddressBox(props) {
    const { userData } = props;
    return (
        <div className="user-address-box">
            <h2>Address</h2>
            <div className="detail">
                <span>Street:</span> {userData.address.street}
            </div>
            <div className="detail">
                <span>Suite:</span> {userData.address.suite}
            </div>
            <div className="detail">
                <span>City:</span> {userData.address.city}
            </div>
            <div className="detail">
                <span>Zipcode:</span> {userData.address.zipcode}
            </div>
        </div>
    );
}

export default UserAddressBox;
