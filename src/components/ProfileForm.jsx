
function ProfileForm({ title, fields, inputValues, setInputValues }) {
    
    const handleChange = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name

        setInputValues((prevValues) => ({
            ...prevValues,
            [inputName]: inputValue,
        }));
    }

    return (
        <div className="form-section">
            <p>{title}</p>
            {fields.map((field, index) => (
                <div className="input-container" key={index}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <br />
                    <input
                        type="text"
                        name={field.id}
                        value={inputValues[field.id]}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProfileForm