export default function FormInput(props) {
    const { title, value } = props
    return (
        <div className="profile-data-form-field">
            <p className="profile-data-form-field-title">{title}</p>
            <input className="profile-data-form-field-input" type='text' name={value} defaultValue={value} />
        </div>
    )
}