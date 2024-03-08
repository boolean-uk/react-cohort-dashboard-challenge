
function FormSection({ title, fields }) {

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
                        placeholder={field.placeholder}
                    />
                </div>
            ))}
        </div>
    )
}

export default FormSection