function AddressInfo({userData, handleChange }) {
    
    const addressInfo = [
        {desc: "street", title: "Street", required: false},
        {desc: "suite", title: "Suite", required: false},
        {desc: "city", title: "City", required: false},
        {desc: "zipcode", title: "Zipcode", required: false}
    ]

    return (
        <div className="address profile-group">
        <h2>Address</h2>
        {addressInfo.map((option) =>
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

export default AddressInfo