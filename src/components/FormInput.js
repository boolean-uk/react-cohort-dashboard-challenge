export default function FormInput(props) {
    const { title, thisName, user, set, req } = props

    const handleChange = (event) => {
        set({...user, [thisName]: event.target.value})
    }

    return (
        <div className="profile-data-form-field">
            <p className="profile-data-form-field-title">{title}</p>
            <input className="profile-data-form-field-input" type='text' name={thisName} defaultValue={user[thisName]} onChange={handleChange} required={req}/>
        </div>
    )
}