function CompanyInfo({userData, handleChange }) {
    
    const companyInfo = [
        {desc: "companyName", title: "Name", required: false},
        {desc: "catchPhrase", title: "Catch Phrase", required: false},
        {desc: "businessStatement", title: "Business Statement", required: false}
    ]

    return (
        <div className="company-info profile-group">
        <h2>Company info</h2>
        {companyInfo.map((option) =>
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

export default CompanyInfo