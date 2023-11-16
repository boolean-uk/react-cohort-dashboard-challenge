function ContactInfo({userData, handleChange }) {
    
    const contactInfo = [
        {desc: "phone", title: "Phone*", required: true},
        {desc: "website", title: "Website", required: false}
    ]

    return (
        <div className="contact-info profile-group">
            <h2>Contact info</h2>
            {contactInfo.map((option) =>
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

export default ContactInfo