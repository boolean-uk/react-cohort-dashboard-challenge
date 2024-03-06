function Address({ user }) {
    return (
        <div className="profileForm">
            <h1>Address</h1>
            <h4>City</h4>
            <input value={user.city}></input>
            <h4>Street</h4>
            <input value={user.street}></input>
        </div >
    )
}

export default Address