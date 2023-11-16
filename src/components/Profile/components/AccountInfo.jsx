function AccountInfo({userData, handleChange }) {
    
    const accountInfo = [
        {desc: "firstName", title: "First Name*", required: true},
        {desc: "lastName", title: "Last Name*", required: true},
        {desc: "username", title: "Username*", required: true},
        {desc: "email", title: "Email*", required: true}
    ]

    return (
        <div className="account-info profile-group">
            <h2 className="profile-group-title">Account Info</h2>
            {accountInfo.map((option) =>
                <label className="profile-label" htmlFor={option.desc} key={option.desc}>
                    {option.title}
                    <input className="profile-input grid"
                        type="text"
                        id={option.desc}
                        name={option.desc}
                        value={userData.input}
                        onChange={e => handleChange(e)}
                        required={option.required}
                    />
                </label>
            )}  
        </div>
    )
}

export default AccountInfo