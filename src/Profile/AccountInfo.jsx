function AccountInfo({ user }) {
    return (
        <div className="profileForm">
            <h1>Account info</h1>
            <h4>First Name</h4>
            <input value={user.firstName}></input>
            <h4>Last Name</h4>
            <input value={user.lastName}></input>
            <h4>Gender</h4>
            <input value={user.gender}></input>
            <h4>Email</h4>
            <input value={user.email}></input>
        </div >
    )
}

export default AccountInfo