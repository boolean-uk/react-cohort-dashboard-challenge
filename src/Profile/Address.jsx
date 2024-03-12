function Address({ user, handleChange }) {
    return (
        <div className="profileForm">
            <h1>Address</h1>
            <h4>City</h4>
            <input value={user.city} name="city" onChange={handleChange}></input>
            <h4>Street</h4>
            <input value={user.street} name="street" onChange={handleChange}></input>
            <h4>Job</h4>
            <input value={user.jobTitle} name="jobTitle" onChange={handleChange}></input>

        </div >
    )
}

export default Address