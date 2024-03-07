function AccountInfo({ user, handleChange }) {
    return (
        <div className="profileForm">
            <h1>Account info</h1>
            <h4>First Name</h4>
            <input value={user.firstName} name="firstName" onChange={handleChange}></input>
            <h4>Last Name</h4>
            <input value={user.lastName} name='lastName' onChange={handleChange}></input>
            <h4>Gender</h4>
            <input value={user.gender} name='gender' onChange={handleChange}></input>
            <h4>Email</h4>
            <input value={user.email} name='email' onChange={handleChange}></input>
        </div >
    )
}

export default AccountInfo